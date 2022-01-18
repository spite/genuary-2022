import {
  RawShaderMaterial,
  Vector2,
  GLSL3,
} from "../third_party/three.module.js";
import { getFBO } from "../modules/fbo.js";
import { shader as orthoVertexShader } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as vignette } from "../shaders/vignette.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as screen } from "../shaders/screen.js";
import { shader as noise2d } from "../shaders/noise2d.js";
import { shader as hsl } from "../shaders/hsl.js";
import { blur13 } from "../shaders/fast-separable-gaussian-blur.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";

// https://www.premiumbeat.com/blog/create-vhs-look-premiere-pro/

const colorFragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D inputMap;

out vec4 color;

vec3 contrast(in vec3 color, in float contrast) {
  float f = (259. * (contrast + 255.)) / (255. * ( 259. - contrast ));
  return ((f * (color * 255. - 128.)) + 128.) / 255.;
}

vec3 brightness(in vec3 color, in float brightness) {
	return color + vec3(brightness/255.);
}

vec3 whites(in vec3 color, in float value) {
  return clamp(color + value/255., vec3(0.), vec3(1.));
}

vec3 blacks(in vec3 color, in float value) {
  return clamp(color + value/255., vec3(0.), vec3(1.));
}

${hsl}

${screen}

${vignette}

void main() {
  // float lines = .5 + .5 * sin(gl_FragCoord.x / 1.1);
  // lines = clamp(lines + .5, 0., 1.);
  vec3 c = texture(inputMap, vUv).rgb;
  c = contrast(c, 15.);
  c = whites(c, -10.);
  c = blacks(c, 7.);
  c = rgb2hsv(c);
  c.y = clamp(c.y - .2, 0., 1.);
  c.z = clamp(c.z + .1, 0., 1.);
  c = hsv2rgb(c);
  c = screen(c, vec3(.7, 0., 0.), .05);

  c = clamp(c, vec3(0.), vec3(1.));
  c.g = clamp(c.g * 1.05, 0., 1.);
  c.b = c.b * .95;

  c = c * clamp(10. * vignette(vUv, 1.1, .5), 0., 1.);

  color = vec4(c, 1.);
}`;

const blurFragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D inputMap;
uniform vec2 delta;

out vec4 color;

${blur13}

void main() {
  color = blur13(inputMap, vUv, delta);
}`;

const blurColorFragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D inputMap;
uniform vec2 delta;

out vec4 color;

${blur13}

void main() {
  vec4 c = texture(inputMap, vUv);
  vec4 red = vec4(0.);
  vec4 blue = vec4(0.);
  int STEPS = 10;
  float s = 1.;
  for(int j=0; j < STEPS; j ++) {
    float i = float(j);
    red += blur13(inputMap, vUv, vec2(0., s * i * 2.2));
    blue += blur13(inputMap, vUv, vec2(s * i * 3., 0.));
  }
  red /= float(STEPS);
  blue /= float(STEPS);
  color.rgb = vec3(max(c.r, red.r), c.g, max(c.b, blue.b));
}`;

const blurColor2FragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D inputMap;
uniform vec2 delta;

out vec4 color;

${blur13}

void main() {
  vec4 c = texture(inputMap, vUv);
  vec4 red = vec4(0.);
  vec4 green = vec4(0.);
  int STEPS = 10;
  float s = 1.;
  for(int j=0; j < STEPS; j ++) {
    float i = float(j);
    red += blur13(inputMap, vUv, vec2(s * i * 1.4, 0.));
    green += blur13(inputMap, vUv, vec2(0., s * i * 1.));
  }
  red /= float(STEPS);
  green /= float(STEPS);
  color.rgb = vec3(max(c.r, red.r), max(c.g, green.g), c.b);
}`;

const sharpenFragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D inputMap;

out vec4 color;

vec3 sharpen(in sampler2D tex, in vec2 coords, in vec2 renderSize, in float radius) {
  float dx = radius / renderSize.x;
  float dy = radius / renderSize.y;
  vec4 sum = vec4(0.0);
  sum += -1. * texture(tex, coords + vec2( -1.0 * dx , 0.0 * dy));
  sum += -1. * texture(tex, coords + vec2( 0.0 * dx , -1.0 * dy));
  sum += 5. * texture(tex, coords + vec2( 0.0 * dx , 0.0 * dy));
  sum += -1. * texture(tex, coords + vec2( 0.0 * dx , 1.0 * dy));
  sum += -1. * texture(tex, coords + vec2( 1.0 * dx , 0.0 * dy));
  return sum.rgb;
}

vec3 highPass(in sampler2D inputMap, in vec2 uv, in vec2 resolution) {

  float step_w = 4.0/resolution.x;
  float step_h = 4.0/resolution.y;

  vec2 offset[9];
  float kernel[9];

  offset[0] = vec2(-step_w, -step_h);
  offset[1] = vec2(0.0, -step_h);
  offset[2] = vec2(step_w, -step_h);

  offset[3] = vec2(-step_w, 0.0);
  offset[4] = vec2(0.0, 0.0);
  offset[5] = vec2(step_w, 0.0);

  offset[6] = vec2(-step_w, step_h);
  offset[7] = vec2(0.0, step_h);
  offset[8] = vec2(step_w, step_h);

  kernel[0] = -1.;
  kernel[1] = -1.;
  kernel[2] = -1.;

  kernel[3] = -1.;
  kernel[4] = 8.;
  kernel[5] = -1.;

  kernel[6] = -1.;
  kernel[7] = -1.;
  kernel[8] = -1.;

  int i = 0;
  vec4 sum = vec4(0.0);

  for( int i=0; i<9; i++ ) {
    vec4 tmp = texture(inputMap, uv + offset[i]);
    sum += tmp * kernel[i];
    sum.a = 1.0;
  }

  return sum.rgb + .5;
}

vec3 overlay(vec3 base, vec3 blend) {
  return mix(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, step(base, vec3(0.5)));
}

void main() {
  vec3 c = highPass(inputMap, vUv, vec2(textureSize(inputMap, 0)));
  vec3 o = texture(inputMap, vUv).rgb;
  color = vec4(overlay(o, c), 1.);
}`;

const finalFragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D inputMap;
uniform float time;
uniform bool paused;

out vec4 color;

${noise}
${noise2d}

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

// https://www.shadertoy.com/view/4lB3Dc

void main() {
  vec2 uv0 = vUv;
  float r = .1;
  if(paused) {
    r = 1.;
  }
  uv0.x += r * (rand(vec2(time, gl_FragCoord.y))-0.5)/200.0;
  uv0.y += r * (rand(vec2(time))-0.5)/100.0;

  color = texture(inputMap, uv0);
  color += .01 * noise(gl_FragCoord.xy + vec2(time, 0.));
  color.rgb += .05 * vec3(1.,0.,1.) * vec3(snoise(gl_FragCoord.xy/1000. + vec2(0., time * 1123.)));
  color.rgb += .01 * vec3(snoise(gl_FragCoord.xy/100. + vec2(time * 3453., 0.)));

  vec2 uv = vUv;
  uv.x += (rand(vec2(time, gl_FragCoord.y))-0.5)/64.0;
  uv.y += (rand(vec2(time))-0.5)/32.0;

  if(paused) {
    float s = 3. + rand(vec2(time, 0.));
    float whiteNoise =(rand(vec2(floor(uv.y*80.0),floor(uv.x*50.0))+vec2(time,0)) * uv.y + uv.y) / s;
    whiteNoise = step(.5, whiteNoise);
    color.rgb += vec3(whiteNoise);
  }
}`;

class VHS {
  constructor(renderer, params = {}) {
    this.renderer = renderer;

    const supersampled = true;

    this.colorFBO = getFBO(1, 1, {}, supersampled);

    const colorShader = new RawShaderMaterial({
      uniforms: { inputMap: { value: this.colorFBO.texture } },
      vertexShader: orthoVertexShader,
      fragmentShader: colorFragmentShader,
      glslVersion: GLSL3,
    });
    this.colorPass = new ShaderPass(colorShader);

    const blurShader = new RawShaderMaterial({
      uniforms: {
        inputMap: { value: this.colorPass.texture },
        delta: { value: new Vector2(0, 0) },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: blurFragmentShader,
      glslVersion: GLSL3,
    });
    this.blurPass = new ShaderPingPongPass(blurShader);

    const blurColorShader = new RawShaderMaterial({
      uniforms: { inputMap: { value: this.colorFBO.texture } },
      vertexShader: orthoVertexShader,
      fragmentShader: blurColorFragmentShader,
      glslVersion: GLSL3,
    });
    this.blurColorPass = new ShaderPass(blurColorShader);

    const blurColor2Shader = new RawShaderMaterial({
      uniforms: { inputMap: { value: this.blurColorPass.texture } },
      vertexShader: orthoVertexShader,
      fragmentShader: blurColor2FragmentShader,
      glslVersion: GLSL3,
    });
    this.blurColor2Pass = new ShaderPass(blurColor2Shader);

    const sharpenShader = new RawShaderMaterial({
      uniforms: { inputMap: { value: this.blurColor2Pass.texture } },
      vertexShader: orthoVertexShader,
      fragmentShader: sharpenFragmentShader,
      glslVersion: GLSL3,
    });
    this.sharpenPass = new ShaderPass(sharpenShader);

    const finalShader = new RawShaderMaterial({
      uniforms: {
        inputMap: { value: this.colorFBO.texture },
        paused: { value: false },
        time: { value: 0 },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: finalFragmentShader,
      glslVersion: GLSL3,
    });
    this.finalPass = new ShaderPass(finalShader);
  }

  setSize(w, h) {
    this.colorFBO.setSize(w, h);
    this.colorPass.setSize(w, h);
    this.blurPass.setSize(w, h);
    this.blurColorPass.setSize(w, h);
    this.blurColor2Pass.setSize(w, h);
    this.sharpenPass.setSize(w, h);
    this.finalPass.setSize(w, h);
  }

  get texture() {
    return this.finalPass.texture;
  }

  set paused(v) {
    this.finalPass.shader.uniforms.paused.value = v;
  }

  render(scene, camera) {
    const time = performance.now() / 1000;

    this.renderer.setRenderTarget(this.colorFBO);
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);

    this.colorPass.render(this.renderer);
    this.blurPass.shader.uniforms.inputMap.value = this.colorPass.texture;
    this.blurPass.shader.uniforms.delta.value.set(0, 0);
    this.blurPass.render(this.renderer);

    this.blurPass.shader.uniforms.inputMap.value = this.blurPass.texture;
    this.blurPass.shader.uniforms.delta.value.set(0, 0);
    this.blurPass.render(this.renderer);

    this.blurColorPass.shader.uniforms.inputMap.value = this.blurPass.texture;
    this.blurColorPass.render(this.renderer);

    this.blurColor2Pass.shader.uniforms.inputMap.value =
      this.blurColorPass.texture;
    this.blurColor2Pass.render(this.renderer);

    this.sharpenPass.shader.uniforms.inputMap.value =
      this.blurColor2Pass.texture;
    this.sharpenPass.render(this.renderer);

    this.finalPass.shader.uniforms.time.value = time;
    this.finalPass.shader.uniforms.inputMap.value = this.sharpenPass.texture;
    this.finalPass.render(this.renderer);
  }
}

export { VHS };
