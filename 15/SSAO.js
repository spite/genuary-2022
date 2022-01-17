import { ShaderPass } from "../modules/ShaderPass.js";
import {
  GLSL3,
  RawShaderMaterial,
  WebGLMultipleRenderTargets,
  NearestFilter,
  FloatType,
  Scene,
  Mesh,
  Vector2,
  PlaneBufferGeometry,
  OrthographicCamera,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as hsl } from "../shaders/hsl.js";
import { shader as screen } from "../shaders/screen.js";
import { getFBO } from "../modules/fbo.js";
import { shader as fbm } from "../shaders/fbm.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float lines;
uniform float time;
uniform float height;

out vec3 vNormal;
out float vColor;
out vec4 vPosition;

${fbm}

float parabola(in float x, in float k) {
  return pow(4. * x * (1. - x), k);
}

#define PI 3.14159265359

float atan2(in float y, in float x) {
  bool s = (abs(x) > abs(y));
  return mix(PI/2.0 - atan(x,y), atan(y,x), s);
}

vec2 rotate(vec2 v, float inc) {
  float r = length(v);
  float a = atan(v.y, v.x);
	float s = sin(a+inc);
	float c = cos(a+inc);
	return vec2(r * c, r * s);
  // return v;
}

float map(vec3 p) {
  p.xz = rotate(p.xz, time / 100.);
  float n = 2. * fbm(vec3(p.x, 0., p.z)) - 1.;
  return n;
}

void main() {
  float s = .25;
  float n = 0.;
  vNormal = normal;
  float h = 0.;
  vColor = 0.;
  float z = round(position.z * 2. + .5)/2.;
  vColor  = 1. - (z / 10. + .5);
  vec3 p = position;
  if(position.y>0.) {
    vec2 pp = position.xy;
    n = .5 + .5 * map(s * vec3(pp.xy + vec2(time, 0.), z));
    n *= parabola(pp.x / 10. + .5, 1.);
    n *= 8. * height;
    // n += .4;
    h = position.z;
    p += vec3(0., n, 0.);
    p.y *= parabola(clamp(z/9.5 + .5, 0., 1.), 1.);
    p.y = clamp(p.y, -.25, 100.0);
  }
  vPosition = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * vPosition;
}`;

const fragmentShader = `precision highp float;

in vec3 vNormal;
in float vColor;
in vec4 vPosition;

uniform sampler2D gradientTex;
uniform float near;
uniform float far;

layout(location = 0) out vec4 color;
layout(location = 1) out vec4 position;
layout(location = 2) out vec4 normal;

${hsl}

float linearizeDepth(float z) {
  return (2.0 * near) / (far + near - z * (far - near));	
}

void main() {
  vec3 cn = normalize(vNormal);
  
  vec3 dx = dFdx(vPosition.xyz);
  vec3 dy = dFdy(vPosition.xyz);
  vec3 n = normalize(cross(dx, dy));

  vec3 l = normalize(vec3(1.));
  float diffuse = .5 + .5 * max(0., dot(n, l));
  vec4 co = texture(gradientTex, vec2(vColor, 0.));

  // vec3 e = normalize(-vPosition.xyz);
  // vec3 h = normalize(l + e);
  // float specular = pow(max(dot(n, h), 0.), 10.);

  vec3 c = rgb2hsv(co.xyz);

  float f = 0.;
  if(abs(cn.x) > 0.) f = 1./3.;
  if(abs(cn.z) > 0.) f = 2./3.;
  if(abs(cn.y) > 0.) f = 3./3.;
  if(cn.y <0.) f = 0./3.;
  f = .5 + .5 * f;

  c.z *= f;
  c.z += .2 * diffuse;
  // c.z += .5 * specular;

  c = hsv2rgb(c);
  
  float d = linearizeDepth(length( vPosition ));
  color = vec4(c.rgb, 1.);
  position = vec4(vPosition.xyz, d);
  normal = vec4(n, 1.);
}`;

const ssaoFs = `precision highp float;

uniform sampler2D colorMap; 
uniform sampler2D positionMap;
uniform sampler2D normalMap;
uniform float bias;
uniform float radius;
uniform vec2 attenuation;
uniform float time;

in vec2 vUv;

out vec4 fragColor;

float sampleBuffer( vec3 position, vec3 normal, vec2 uv) {

  vec3 samplePosition = texture(positionMap, uv ).xyz;

  vec3 dir = samplePosition - position;
  float intensity = max( dot( normalize( dir ), normal ) - bias, 0.0 );

  float dist = length( dir );
  float factor = 1.0 / ( attenuation.x + ( attenuation.y * dist ) );

  return intensity * factor;
}

float random(vec2 n, float offset ){
	return .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);
}

#define M_PI 3.1415926535897932384626433832795

${hsl}

${screen}

vec3 czm_saturation(vec3 rgb, float adjustment)
{
    // Algorithm from Chapter 16 of OpenGL Shading Language
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

void main() {

  vec2 size = vec2(textureSize(colorMap, 0));
  vec2 inc = 1. / size;

  vec4 posDepth = texture(positionMap, vUv );
  vec3 position = posDepth.xyz;
  vec3 normal = normalize(texture(normalMap, vUv ).xyz);
  vec2 randVec = normalize( vec2( random( vUv, 1. ), random( vUv.yx, 1. ) ) );

  float depth = posDepth.w;

  float kRadius = radius * ( 1.0 - depth );

  vec4 acCol = vec4(0.);

  vec2 k[ 4 ];
  k[ 0 ] = vec2(  0.0,  1.0 );
  k[ 1 ] = vec2(  1.0,  0.0 );
  k[ 2 ] = vec2(  0.0, -1.0 );
  k[ 3 ] = vec2( -1.0,  0.0 );

  const float v = M_PI / 4.;

  float occlusion = 0.0;
  for( int i = 0; i < 4; ++i ){
    vec2 k1 = reflect( k[ i ], randVec );
    vec2 k2 = vec2( k1.x * v - k1.y * v, k1.x * v + k1.y * v );
    k1 *= inc;
    k2 *= inc;

    occlusion += sampleBuffer( position, normal, vUv + k1 * kRadius );
    occlusion += sampleBuffer( position, normal, vUv + k2 * kRadius * 0.75 );
    occlusion += sampleBuffer( position, normal, vUv + k1 * kRadius * 0.5 );
    occlusion += sampleBuffer( position, normal, vUv + k2 * kRadius * 0.25 );

    float s = 1.;
    acCol += texture(colorMap, vUv + s * k1 * kRadius );
    acCol += texture(colorMap, vUv + s * k2 * kRadius * 0.75 );
    acCol += texture(colorMap, vUv + s * k1 * kRadius * 0.5 );
    acCol += texture(colorMap, vUv + s * k2 * kRadius * 0.25 );
  }

  occlusion /= 16.0;
  occlusion = clamp( occlusion, 0.0, 1.0 );

  acCol /= 16.;

  vec4 color = texture(colorMap, vUv);
  color.rgb = screen(color.rgb, acCol.rgb, .1);
	// color.rgb = clamp(color.rgb, vec3(0.), vec3(1.));
	vec3 hsl = rgb2hsv(color.rgb);
	hsl.z *= 1.-1.5*occlusion;//* (1.-hsl.z);
  hsl.z = clamp(hsl.z, 0., 1.);
	vec3 finalColor = czm_saturation(hsv2rgb(hsl), 1.1 + occlusion);
  // vec3 finalColor = hsv2rgb(hsl);

	fragColor = vec4(finalColor.rgb, 1.);
}`;

class SSAO {
  constructor() {
    this.renderTarget = new WebGLMultipleRenderTargets(1, 1, 3);
    for (const texture of this.renderTarget.texture) {
      texture.minFilter = NearestFilter;
      texture.magFilter = NearestFilter;
      texture.type = FloatType;
    }

    this.shader = new RawShaderMaterial({
      uniforms: {
        time: { value: 0 },
        height: { value: 0 },
        far: { value: 0 },
        near: { value: 0 },
        gradientTex: { value: null },
        lines: { value: 1 },
      },
      vertexShader,
      fragmentShader,
      glslVersion: GLSL3,
    });
    this.scene = new Scene();
    this.camera = new OrthographicCamera(
      1 / -2,
      1 / 2,
      1 / 2,
      1 / -2,
      0.00001,
      1000
    );
    this.quad = new Mesh(new PlaneBufferGeometry(1, 1), this.shader);
    this.quad.scale.set(1, 1, 1);
    this.scene.add(this.quad);

    this.colorFBO = getFBO(1, 1);

    this.color = this.renderTarget.texture[0];
    this.positions = this.renderTarget.texture[1];
    this.normals = this.renderTarget.texture[2];

    const s = 4;

    this.ssaoShader = new RawShaderMaterial({
      uniforms: {
        colorMap: { value: this.color },
        positionMap: { value: this.positions },
        normalMap: { value: this.normals },
        bias: { value: 0.05 },
        radius: { value: 20 },
        attenuation: { value: new Vector2(0.5, 5).multiplyScalar(s) },
        time: { value: 0 },
      },
      vertexShader: orthoVs,
      fragmentShader: ssaoFs,
      glslVersion: GLSL3,
    });
    this.pass = new ShaderPass(this.ssaoShader, {});
  }

  setSize(width, height, dpr) {
    const w = width * dpr;
    const h = height * dpr;
    this.renderTarget.setSize(w, h);
    this.quad.scale.set(w, h, 1);
    this.camera.left = -w / 2;
    this.camera.right = w / 2;
    this.camera.top = h / 2;
    this.camera.bottom = -h / 2;
    this.camera.updateProjectionMatrix();
    this.pass.setSize(w, h);
    this.colorFBO.setSize(w, h);
  }

  get output() {
    return this.pass.texture;
  }

  set gradient(g) {
    this.shader.uniforms.gradientTex.value = g;
  }

  set lines(l) {
    this.shader.uniforms.lines.value = l;
  }

  set time(t) {
    this.shader.uniforms.time.value = t;
  }

  set height(h) {
    this.shader.uniforms.height.value = h;
  }

  render(renderer, scene, camera) {
    this.shader.uniforms.near.value = camera.near;
    this.shader.uniforms.far.value = camera.far;

    renderer.setRenderTarget(this.renderTarget);
    scene.overrideMaterial = this.shader;
    renderer.render(scene, camera);
    scene.overrideMaterial = null;
    renderer.setRenderTarget(null);

    this.pass.render(renderer);
  }
}

export { SSAO };
