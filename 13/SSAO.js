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
  DoubleSide,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as hsl } from "../shaders/hsl.js";
import { shader as screen } from "../shaders/screen.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in vec2 offset;

uniform sampler2D points;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform sampler2D gradient;
uniform vec3 background;

out vec3 vNormal;
out vec3 vColor;
out vec3 vPosition;

mat3 calcLookAtMatrix(vec3 origin, vec3 target, float roll) {
  vec3 rr = vec3(sin(roll), cos(roll), 0.0);
  vec3 ww = normalize(target - origin);
  vec3 uu = normalize(cross(ww, rr));
  vec3 vv = normalize(cross(uu, ww));

  return mat3(uu, vv, ww);
}

${hsl}

void main() {
  vec2 inc = 1. / vec2(80., 800.);
  vec2 coord = vec2(offset.x + .5 * inc.x, offset.y + .5 * inc.y);
  vec2 coord2 = vec2(offset.x + 1.5 * inc.x, offset.y + .5 * inc.y);
  vec3 p = texture(points, coord).xyz;
  vec3 pp = texture(points, coord2).xyz;
  float s = 1. - length(p.xyz) / 5.;
  mat3 m = calcLookAtMatrix(p, pp, 0.);
  p += m * position / 50.;
  vNormal = normalMatrix * m * normal; 
  
  vec4 mvPosition = modelViewMatrix * s * vec4(p, 1.);
  vPosition = mvPosition.xyz / mvPosition.w;
  gl_Position = projectionMatrix * mvPosition;
  float distance =  length(p) / 5.;
  vColor = texture(gradient, vec2(offset.y + .5 / 800., .5)).rgb;
  float d2 = .1 + .9 * distance;
  vColor = rgb2hsv(vColor);
  vColor.y += d2 / 10.;
  vColor.z = d2;
  vColor = hsv2rgb(vColor);
  vColor.rgb = mix(vColor.rgb, background, .5 * distance);
}`;

const fragmentShader = `precision highp float;

layout(location = 0) out vec4 color;
layout(location = 1) out vec4 position;
layout(location = 2) out vec4 normal;

uniform float near;
uniform float far;
uniform sampler2D gradient;
uniform vec3 background;

in vec3 vNormal;
in vec3 vColor;
in vec3 vPosition;

float linearizeDepth(float z) {
  return (2.0 * near) / (far + near - z * (far - near));	
}

${hsl}

void main() {
  vec3 n = normalize(vNormal);
  vec3 l = normalize(vec3(1.));
  float diffuse = .5 + .5 * max(0., dot(n, l));
  color = vec4(vColor * diffuse, 1.);

  float rimPower = 1.;
  float useRim = 1.;
  float f = rimPower * abs( dot( n, normalize( vPosition ) ) );
  f = clamp( 0., 1., useRim * ( 1. - smoothstep( 0.0, 1., f ) ) );
  color.rgb = mix(color.rgb, background, .1 * f);

  float d = linearizeDepth(length( vPosition ));
  position = vec4(vPosition, d);
  normal = vec4(n, 1.);
}
`;

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
	hsl.z *= 1.-occlusion;//* (1.-hsl.z);
  hsl.z = clamp(hsl.z, 0., 1.);
	vec3 finalColor = czm_saturation(hsv2rgb(hsl), 1.5 + occlusion);
  // vec3 finalColor = hsv2rgb(hsl);

	fragColor = vec4(finalColor.rgb, 1. );
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
        far: { value: 0 },
        near: { value: 0 },
        gradient: { value: null },
        background: { value: null },
        points: { value: null },
        gradient: { value: null },
        time: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      glslVersion: GLSL3,
      side: DoubleSide,
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

    this.color = this.renderTarget.texture[0];
    this.positions = this.renderTarget.texture[1];
    this.normals = this.renderTarget.texture[2];

    const s = 1;

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
  }

  set sim(s) {
    this.shader.uniforms.points.value = s;
  }

  get output() {
    return this.pass.texture;
  }

  render(renderer, scene, camera) {
    this.shader.uniforms.near.value = 0; //camera.near;
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
