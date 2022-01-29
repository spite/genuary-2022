import {
  GLSL3,
  RawShaderMaterial,
  Texture,
  TextureLoader,
} from "../third_party/three.module.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { shader as hsl } from "../shaders/hsl.js";
import { shader as screen } from "../shaders/screen.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;

const fragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D map;
uniform sampler2D paper;
uniform vec3 colors[3];

out vec4 fragColor;

vec4 sampleSrc(in sampler2D src, in vec2 uv) {
  vec4 c = texture(src, uv);
  c = round(c*1.)/1.;
  return c;
}

vec4 findBorder(in sampler2D src, in vec2 uv, in vec2 resolution, in float width){
	float x = width / resolution.x;
	float y = width / resolution.y;
	vec4 horizEdge = vec4( 0.0 );
	horizEdge -= sampleSrc(src, vec2( uv.x - x, uv.y - y ) ) * 1.0;
	horizEdge -= sampleSrc(src, vec2( uv.x - x, uv.y     ) ) * 2.0;
	horizEdge -= sampleSrc(src, vec2( uv.x - x, uv.y + y ) ) * 1.0;
	horizEdge += sampleSrc(src, vec2( uv.x + x, uv.y - y ) ) * 1.0;
	horizEdge += sampleSrc(src, vec2( uv.x + x, uv.y     ) ) * 2.0;
	horizEdge += sampleSrc(src, vec2( uv.x + x, uv.y + y ) ) * 1.0;
	vec4 vertEdge = vec4( 0.0 );
	vertEdge -= sampleSrc(src, vec2( uv.x - x, uv.y - y ) ) * 1.0;
	vertEdge -= sampleSrc(src, vec2( uv.x    , uv.y - y ) ) * 2.0;
	vertEdge -= sampleSrc(src, vec2( uv.x + x, uv.y - y ) ) * 1.0;
	vertEdge += sampleSrc(src, vec2( uv.x - x, uv.y + y ) ) * 1.0;
	vertEdge += sampleSrc(src, vec2( uv.x    , uv.y + y ) ) * 2.0;
	vertEdge += sampleSrc(src, vec2( uv.x + x, uv.y + y ) ) * 1.0;
	vec4 edge = sqrt((horizEdge * horizEdge) + (vertEdge * vertEdge));
	return edge;
}

vec4 findBorder2(in sampler2D src, in vec2 uv, in vec2 resolution, in float width){
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
	return edge;
}

${noise3d}

float fbm3(vec3 v) {
  float result = snoise(v);
  result += snoise(v * 2.) / 2.;
  result += snoise(v * 4.) / 4.;
  result /= (1. + 1./2. + 1./4.);
  return result;
}

vec2 disturb(in vec2 uv, in float noisiness, in float offset) {
  float ss = 10.;
  vec2 disp = .005  *noisiness * vec2(fbm3(vec3(ss*uv + vec2(offset, 0.), 1.)), fbm3(vec3(ss*uv.yx, 1.)));
  return uv + disp;
}

#define OCTAVES 6

float fbm(in vec2 st) {

  float value = 0.0;
  float amplitude = .5;
  float frequency = 0.;

  for (int i = 0; i < OCTAVES; i++) {
      value += amplitude * snoise(vec3(st, 0.));
      st *= 2.; //lacunarity: steps in which we increment de frequencies
      amplitude *= .5; //gain: decreases the amplitude
  }
  return value;
}

float ink(in vec2 uv) {
  return .5 + .5 * fbm(10. * uv);
}

${hsl}

float blendLinearBurn(float base, float blend) {
  return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
  return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
  return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blend(in vec3 src, in vec3 blend, in float a) {
  return blendLinearBurn(src, blend, a);
}

void main() {

  vec3 up = colors[0];// vec3(230., 27., 95.) / 255.;
  vec3 left = colors[1];//vec3(220., 207., 198.) / 255.;
  vec3 right = colors[2];//vec3(76., 141., 299.) / 255.;

  float s = 10.;

  up = rgb2hsv(up);
  up.x += .1 * fbm(vUv * s);
  up = hsv2rgb(up);
  
  left = rgb2hsv(left);
  left.x += .1 * fbm(vUv * s);
  left = hsv2rgb(left);

  right = rgb2hsv(right);
  right.x += .1 * fbm(vUv * s);
  right = hsv2rgb(right);

  vec2 uvr = disturb(vUv, 1.2, 23234.);
  vec2 uvg = disturb(vUv, 1.2, 2324.);
  vec2 uvb = disturb(vUv, 1.2, 234.);
  vec2 uvBorder = disturb(vUv, 1.2, -1234.);
  
  vec2 size = vec2(textureSize(map, 0));
  vec4 srcR = sampleSrc(map, uvr);
  float hueUp = (1.5*(texture(map, uvr).g) - .5);

  vec4 srcG = sampleSrc(map, uvg);
  vec4 srcB = sampleSrc(map, uvb);
  float b = 1. - length(findBorder(map, vUv, size, .1));

  float aR = texture(map, uvr).a;
  float aG = texture(map, uvg).a;
  float aB = texture(map, uvb).a;

  float inkUp = ink(vUv);
  float inkLeft = ink(vUv*1.1);
  float inkRight = ink(vUv*.9);

  vec3 rup = rgb2hsv(up);
  rup.y += .1 * hueUp;
  rup.z += .1 * hueUp;
  rup = hsv2rgb(rup);

  vec3 c = vec3(1.);

  c = blend(c, rup, srcG.g * inkUp * aG);
  c = blend(c, left, srcB.b * inkLeft * aB );
  c = blend(c, right, srcR.r * inkRight * aR );

  vec2 pSize = vec2(textureSize(paper, 0));
  vec4 p = .5 + .5 * texture(paper, gl_FragCoord.xy / pSize);

  fragColor.rgb = blend(p.rgb, c, 1.);
  fragColor.rgb *= .99 + .01 * b;
    

  float shade = length(findBorder(map, uvBorder, size, .1).rgb);
  fragColor.rgb *= 1. - .1 * vec3(shade);
}`;

const loader = new TextureLoader();
const paper = loader.load("../assets/Watercolor_ColdPress.jpg");

const waterColorShader = new RawShaderMaterial({
  uniforms: {
    map: { value: null },
    paper: { value: paper },
    colors: { value: null },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
});

const waterColorPass = new ShaderPass(waterColorShader);

export { waterColorPass };
