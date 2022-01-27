import { getFBO } from "../modules/fbo.js";
import { addResize, resize } from "../modules/renderer.js";
import {
  scene,
  renderer,
  camera,
  update as updateScene,
  pointLight,
} from "./scene.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import {
  Color,
  GLSL3,
  MeshNormalMaterial,
  NearestFilter,
  Quaternion,
  RawShaderMaterial,
  RepeatWrapping,
  RGBAFormat,
  TextureLoader,
  UnsignedByteType,
  Vector3,
  WebGLMultipleRenderTargets,
} from "../third_party/three.module.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { BlurPass } from "./blur.js";
import { shader as hsl } from "../shaders/hsl.js";
import { randomInRange } from "../modules/Maf.js";

const fbo = getFBO(1, 1, {}, true);

const segmentationFs = `precision highp float;

in vec2 vUv;

uniform sampler2D map;
uniform vec3 colors[5];

layout(location = 0) out vec4 color1;
layout(location = 1) out vec4 color2;
layout(location = 2) out vec4 color3;
layout(location = 3) out vec4 color4;
layout(location = 4) out vec4 color5;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec4 src = texture(map, vUv);

  float weights[] = float[](0., 0., 0., 0., 0.);

  int id = -1;
  float closest = 100.;
  for(int i=0; i<5; i++) {
    float d = abs(luma(src.rgb) - luma(colors[i].rgb));
    if(d < closest) {
      closest = d;
      id = i;
    }
  }

  weights[0] = id == 0 ? 1. : 0.;
  weights[1] = id == 1 ? 1. : 0.;
  weights[2] = id == 2 ? 1. : 0.;
  weights[3] = id == 3 ? 1. : 0.;
  weights[4] = id == 4 ? 1. : 0.;

  float a = 1.;//src.a;

  color1 = vec4(vec3(weights[0]), a);
  color2 = vec4(vec3(weights[1]), a);
  color3 = vec4(vec3(weights[2]), a);
  color4 = vec4(vec3(weights[3]), a);
  color5 = vec4(vec3(weights[4]), a);
}
`;

const palette = ["#2E294E", "#541388", "#F1E9DA", "#FFD400", "#D90368"];
const colors = palette.map((c) => new Color(c));

const segmentationShader = new RawShaderMaterial({
  uniforms: {
    map: { value: fbo.texture },
    colors: { value: colors },
  },
  vertexShader: orthoVs,
  fragmentShader: segmentationFs,
  glslVersion: GLSL3,
});
const segmentationPass = new ShaderPass(segmentationShader);

const segments = new WebGLMultipleRenderTargets(1, 1, colors.length);
for (const texture of segments.texture) {
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.type = UnsignedByteType;
  texture.format = RGBAFormat;
}

const finalFs = `precision highp float;

in vec2 vUv;

uniform vec3 colors[5];

uniform sampler2D normals;
uniform sampler2D map0;
uniform sampler2D map1;
uniform sampler2D map2;
uniform sampler2D map3;
uniform sampler2D map4;
uniform sampler2D noiseTexture;

out vec4 color;

#define PI 3.1415926535897932384626433832795
#define TAU (2.*PI)

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float aastep(in float threshold, in float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return 1.-smoothstep(threshold-afwidth, threshold+afwidth, value);
}

float sampleSrc(in sampler2D map, in vec2 uv) {
  return step(.5, luma(texture(map, uv).rgb));
}

float findBorder2(in sampler2D src, in vec2 uv, in vec2 resolution){
  float thickness = .25;
	float x = thickness / resolution.x;
	float y = thickness / resolution.y;
	float horizEdge = 0.;
	horizEdge -= sampleSrc(src, vec2( uv.x - x, uv.y - y )) * 1.0;
	horizEdge -= sampleSrc(src, vec2( uv.x - x, uv.y     )) * 2.0;
	horizEdge -= sampleSrc(src, vec2( uv.x - x, uv.y + y )) * 1.0;
	horizEdge += sampleSrc(src, vec2( uv.x + x, uv.y - y )) * 1.0;
	horizEdge += sampleSrc(src, vec2( uv.x + x, uv.y     )) * 2.0;
	horizEdge += sampleSrc(src, vec2( uv.x + x, uv.y + y )) * 1.0;
	float vertEdge = 0.;
	vertEdge -= sampleSrc(src, vec2( uv.x - x, uv.y - y )) * 1.0;
	vertEdge -= sampleSrc(src, vec2( uv.x    , uv.y - y )) * 2.0;
	vertEdge -= sampleSrc(src, vec2( uv.x + x, uv.y - y )) * 1.0;
	vertEdge += sampleSrc(src, vec2( uv.x - x, uv.y + y )) * 1.0;
	vertEdge += sampleSrc(src, vec2( uv.x    , uv.y + y )) * 2.0;
	vertEdge += sampleSrc(src, vec2( uv.x + x, uv.y + y )) * 1.0;
	float edge = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));
	return edge;
}

float findBorder(in sampler2D src, in vec2 uv, in vec2 resolution, in float width){
	float x = width / resolution.x;
	float y = width / resolution.y;
	vec4 horizEdge = vec4( 0.0 );
	horizEdge -= texture(src, vec2( uv.x - x, uv.y - y ) ) * 1.0;
	horizEdge -= texture(src, vec2( uv.x - x, uv.y     ) ) * 2.0;
	horizEdge -= texture(src, vec2( uv.x - x, uv.y + y ) ) * 1.0;
	horizEdge += texture(src, vec2( uv.x + x, uv.y - y ) ) * 1.0;
	horizEdge += texture(src, vec2( uv.x + x, uv.y     ) ) * 2.0;
	horizEdge += texture(src, vec2( uv.x + x, uv.y + y ) ) * 1.0;
	vec4 vertEdge = vec4( 0.0 );
	vertEdge -= texture(src, vec2( uv.x - x, uv.y - y ) ) * 1.0;
	vertEdge -= texture(src, vec2( uv.x    , uv.y - y ) ) * 2.0;
	vertEdge -= texture(src, vec2( uv.x + x, uv.y - y ) ) * 1.0;
	vertEdge += texture(src, vec2( uv.x - x, uv.y + y ) ) * 1.0;
	vertEdge += texture(src, vec2( uv.x    , uv.y + y ) ) * 2.0;
	vertEdge += texture(src, vec2( uv.x + x, uv.y + y ) ) * 1.0;
	vec4 edge = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));
	return 1. - aastep(.5, length(edge));
}

float simplex(in vec3 v) {
  return 2. * texture(noiseTexture, v.xy/32.).r - 1.;
}

float fbm3(vec3 v) {
  float result = simplex(v);
  result += simplex(v * 2.) / 2.;
  result += simplex(v * 4.) / 4.;
  result /= (1. + 1./2. + 1./4.);
  return result;
}

vec2 perturb(in vec2 uv, in float noisiness, in float offset) {
  float ss = 1.;
  vec2 disp = .005  *noisiness * vec2(fbm3(vec3(ss*uv + vec2(offset, 0.), 1.)), fbm3(vec3(ss*uv.yx, 1.)));
  return uv + disp;
}

float hatch(in vec2 uv, in float a, in vec2 size) {
  float s = sin(a);
  float c = cos(a);
  mat2 rot = mat2(c, -s, s, c);
  uv = rot * uv;
  float e = fwidth(uv.x) * .5 * size.x;
  float thickness = 1. - e + .1 * fbm3(vec3(uv, 0.));
  return aastep( thickness, .5 + .5 * sin(uv.x  * 1000. * size.x / size.y));
}

${hsl}

void main() {

  vec2 uvn = perturb(vUv, 1.2, -23.);
  vec2 uvn2 = perturb(vUv, 1.4, -232.);

  vec2 uv0 = perturb(vUv, 1., 32.);
  vec2 uv1 = perturb(vUv, 1.1, 453.);
  vec2 uv2 = perturb(vUv, 1.2, 5.);
  vec2 uv3 = perturb(vUv, 1.3, -12.);
  vec2 uv4 = perturb(vUv, 1.4, -123.);

  vec4 src0 = texture(map0, uv0);
  vec4 src1 = texture(map1, uv1);
  vec4 src2 = texture(map2, uv2);
  vec4 src3 = texture(map3, uv3);
  vec4 src4 = texture(map4, uv4);
  color = vec4(src0.rgb * src0.a + src1.rgb * src1.a + src2.rgb * src2.a + src3.rgb * src3.a + src4.rgb * src4.a, 1.);
  float a = (src0.a + src1.a + src2.a + src3.a + src4.a);
  // color.rgb = mix(vec3(1.), color.rgb, a);

  color.rgb = src0.rgb * colors[0].rgb + src1.rgb * colors[1].rgb  + src2.rgb * colors[2].rgb  + src3.rgb * colors[3].rgb  + src4.rgb * colors[4].rgb;

  vec2 size = vec2(textureSize(map0, 0));

  float b = 0.;
  color.rgb = vec3(1.);

  float wN = .4;
  float bN = findBorder(normals, uvn, size, wN);
  
  float w = .15;
  b = findBorder(map0, uv0, size, w);
  color.rgb = step(.5, src0.rgb) *(colors[0].rgb * hatch(uv0, .1, size)) ;
  
  b += findBorder(map1, uv1, size, w);
  color.rgb += step(.5, src1.rgb) *(colors[1].rgb * hatch(uv1, -.3, size)) ;
  
  b += findBorder(map2, uv2, size, w);
  color.rgb += step(.5, src2.rgb) *(colors[2].rgb * hatch(uv2, .5, size)) ;
  
  b += findBorder(map3, uv3, size, w);
  color.rgb += step(.5, src3.rgb) *(colors[3].rgb * hatch(uv3, -.7, size)) ;
  
  b += findBorder(map4, uv4, size, w);
  color.rgb += step(.5, src4.rgb) *(colors[4].rgb * hatch(uv4, -.5, size)) ;
  
  color.rgb = rgb2hsv(color.rgb);
  color.y += b*bN / 10.;
  color.z -= b*bN / 10.;
  color.rgb = hsv2rgb(color.rgb);  
}`;

const loader = new TextureLoader();
const noiseTexture = loader.load("../assets/noise1.png");
noiseTexture.wrapS = noiseTexture.wrapT = RepeatWrapping;

const finalShader = new RawShaderMaterial({
  uniforms: {
    colors: { value: colors },
    normals: { value: null },
    noiseTexture: { value: noiseTexture },
    map0: { value: segments.texture[0] },
    map1: { value: segments.texture[1] },
    map2: { value: segments.texture[2] },
    map3: { value: segments.texture[3] },
    map4: { value: segments.texture[4] },
  },
  vertexShader: orthoVs,
  fragmentShader: finalFs,
  glslVersion: GLSL3,
});
const finalPass = new ShaderPass(finalShader);

const blurPasses = [];
for (let i = 0; i < colors.length; i++) {
  const blurPass = new BlurPass(1, 2);
  blurPasses.push(blurPass);
}

const normals = getFBO(1, 1, {}, true);
const normalMaterial = new MeshNormalMaterial();

const blurNormals = new BlurPass(1, 2);

let running = true;
let prevTime = performance.now();
let time = 0;
const q = new Quaternion();
let frames = 0;
const dir = new Vector3();
dir
  .set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, 1))
  .normalize()
  .multiplyScalar(0.01);
const target = new Vector3();

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

function render() {
  const t = performance.now() / 5000;
  if (running) {
    time += t - prevTime;
  }
  prevTime = t;

  if (running) {
    const r = 10;
    camera.position.x = r * 0.5 * Math.cos(time);
    camera.position.y = r * 0.5 * Math.cos(time * 1.1);
    camera.position.z = r * 0.5 * Math.cos(time * 0.9);

    target.x = r * 0.5 * Math.cos(time * 1.2);
    target.y = r * 0.5 * Math.cos(time * 0.8);
    target.z = r * 0.5 * Math.cos(time * 0.95);
    target.normalize();

    q.set(target.x, target.y, target.z, 1).normalize();
    camera.quaternion.copy(q);
    pointLight.position.copy(camera.position);

    updateScene();
  }

  // renderer.render(scene, camera);

  renderer.setClearColor(0, 1);
  renderer.setRenderTarget(normals);
  scene.overrideMaterial = normalMaterial;
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  renderer.setClearColor(0xffffff, 1);
  scene.overrideMaterial = null;
  renderer.setRenderTarget(fbo);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  renderer.setRenderTarget(segments);
  renderer.render(segmentationPass.orthoScene, segmentationPass.orthoCamera);
  renderer.setRenderTarget(null);

  for (let i = 0; i < blurPasses.length; i++) {
    const blurPass = blurPasses[i];
    blurPass.source = segments.texture[i];
    blurPass.render(renderer);
  }
  blurNormals.source = normals.texture;
  blurNormals.render(renderer);

  finalShader.uniforms.normals.value = blurNormals.output;
  finalShader.uniforms.map0.value = blurPasses[0].output;
  finalShader.uniforms.map1.value = blurPasses[1].output;
  finalShader.uniforms.map2.value = blurPasses[2].output;
  finalShader.uniforms.map3.value = blurPasses[3].output;
  finalShader.uniforms.map4.value = blurPasses[4].output;

  finalPass.render(renderer, true);

  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr0) {
  let dpr = dpr0 / 2;
  fbo.setSize(w * dpr, h * dpr);
  segmentationPass.setSize(w * dpr, h * dpr);
  segments.setSize(w * dpr, h * dpr);
  for (const blurPass of blurPasses) {
    blurPass.setSize(w * dpr, h * dpr);
  }
  blurNormals.setSize(w * dpr, h * dpr);
  normals.setSize(w * dpr, h * dpr);
  finalPass.setSize(w * dpr, h * dpr);
}
addResize(myResize);

resize();
render();
