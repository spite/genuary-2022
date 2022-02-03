import { randomInRange } from "../modules/Maf.js";
import { scene, getControls, renderer, camera } from "../modules/renderer.js";
import {
  AdditiveBlending,
  DataTexture,
  DoubleSide,
  FloatType,
  GLSL3,
  IcosahedronBufferGeometry,
  InstancedBufferAttribute,
  InstancedMesh,
  LinearFilter,
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  NearestFilter,
  Object3D,
  Plane,
  PlaneBufferGeometry,
  RawShaderMaterial,
  RepeatWrapping,
  RGBAFormat,
  RGBFormat,
  TextureLoader,
  TorusBufferGeometry,
  TorusKnotBufferGeometry,
  Vector2,
  Vector3,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";
import { shader as curl } from "../shaders/curl.js";
import { pointsOnSphere } from "../modules/Fibonacci.js";

const controls = getControls();

const pointVs = `precision highp float;

in vec3 position;
in vec2 coord;

uniform sampler2D points;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  vec4 p = texture(points, coord);
  gl_Position = projectionMatrix * (modelViewMatrix * vec4(p.xyz, 1.) + vec4(position.xyz, 0.));  
}`;

const pointFs = `precision highp float;

out vec4 color;

void main() {
  color = vec4(1.);
}`;

const WIDTH = 64;
const HEIGHT = 64;
const POINTS = WIDTH * HEIGHT;

const positions = new Float32Array(POINTS * 4);
const d = 5;
let ptr = 0;
const pts = pointsOnSphere(POINTS);
const v = new Vector3();
for (let i = 0; i < POINTS; i++) {
  v.set(randomInRange(-d, d), randomInRange(-d, d), randomInRange(-d, d));
  // v.normalize();
  // v.copy(pts[i]);
  positions[ptr++] = v.x;
  positions[ptr++] = v.y;
  positions[ptr++] = v.z;
  positions[ptr++] = randomInRange(0, 100);
}
const pointsTexture = new DataTexture(
  positions,
  WIDTH,
  HEIGHT,
  RGBAFormat,
  FloatType,
  undefined,
  undefined,
  undefined,
  NearestFilter,
  NearestFilter
);

const pointGeo = new PlaneBufferGeometry(0.01, 0.01);
const pointMaterial = new RawShaderMaterial({
  uniforms: {
    points: { value: pointsTexture },
  },
  vertexShader: pointVs,
  fragmentShader: pointFs,
  glslVersion: GLSL3,
});
ptr = 0;
const coords = new Float32Array(WIDTH * HEIGHT * 2);
for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    coords[ptr++] = x / WIDTH;
    coords[ptr++] = y / HEIGHT;
  }
}
pointGeo.setAttribute("coord", new InstancedBufferAttribute(coords, 2));

const points = new InstancedMesh(pointGeo, pointMaterial, POINTS);
// scene.add(points);

const particleFs = `precision highp float;

in vec2 vUv;

uniform sampler2D points;
uniform sampler2D map;
uniform float persistence;
uniform float time;

out vec4 color;

${curl}

void main() {
  vec4 c = texture(map, vUv);
  vec3 dir = curlNoise(c.xyz / 20., time);
  c.xyz += normalize(dir) * .05;
  float l = length(c.xyz);
  c.a = clamp(c.a + .1, 0., 1.);
  if(l > 10.) {
    c = texture(points, vUv);
    c.a = 0.;
  }
  color = c;
}`;

const particleShader = new RawShaderMaterial({
  uniforms: {
    map: { value: pointsTexture },
    points: { value: pointsTexture },
    persistence: { value: 1 },
    time: { value: 0 },
  },
  vertexShader: orthoVs,
  fragmentShader: particleFs,
  glslVersion: GLSL3,
});
const particlePass = new ShaderPingPongPass(particleShader, {
  format: RGBAFormat,
  type: FloatType,
  minFilter: NearestFilter,
  magFilter: NearestFilter,
});
particlePass.setSize(WIDTH, HEIGHT);

const distanceFs = `precision highp float;

in vec2 vUv;

uniform sampler2D points;
uniform vec2 size;

out vec4 color;

void main() {
  float a = floor(vUv.x * size.x);
  float b = floor(vUv.y * size.y);
  
  vec2 size2 = vec2(textureSize(points, 0));
  vec2 uv0 = vec2(mod(a, size2.x), floor(a/size2.y)) / size2;
  vec2 uv1 = vec2(mod(b, size2.x), floor(b/size2.y)) / size2;
  vec2 inc = .5 / size2;
  vec4 p0 = texture(points, uv0 + inc);
  vec4 p1 = texture(points, uv1 + inc);
  float l = length(p0.xyz - p1.xyz);
  color = vec4(vec3(l), 1.);
}`;

const distanceShader = new RawShaderMaterial({
  uniforms: {
    points: { value: pointsTexture },
    size: { value: new Vector2(POINTS, POINTS) },
  },
  vertexShader: orthoVs,
  fragmentShader: distanceFs,
  glslVersion: GLSL3,
});
const distancePass = new ShaderPass(distanceShader, {
  format: RGBAFormat,
  type: FloatType,
  minFilter: NearestFilter,
  magFilter: NearestFilter,
});
distancePass.setSize(POINTS, POINTS);

const LINES = (POINTS * (POINTS - 1)) / 2;
console.log(`${POINTS} points, ${LINES} lines`);

const lineCoords = new Float32Array(LINES * 4);
ptr = 0;
for (let i = 0; i < POINTS; i++) {
  for (let j = i; j < POINTS; j++) {
    if (i !== j) {
      const x = i % WIDTH;
      const y = Math.floor(i / WIDTH);
      const x2 = j % WIDTH;
      const y2 = Math.floor(j / WIDTH);

      lineCoords[ptr++] = x;
      lineCoords[ptr++] = y;
      lineCoords[ptr++] = x2;
      lineCoords[ptr++] = y2;
    }
  }
}

const lineVs = `precision highp float;

in vec3 position;
in vec4 coords;
in vec2 uv;

uniform sampler2D points;
uniform sampler2D distances;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out float distance;
out vec2 vUv;
out float d;

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

mat2 rotate2d(float angle) {
  return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

void main() {
  vUv = uv;

  vec2 size = vec2(textureSize(points, 0));
  vec2 inc = .5 / size;

  vec2 size2 = vec2(textureSize(distances, 0));
  float a = (coords.y * size.x + coords.x) / size2.x;  
  float b = (coords.w * size.y + coords.z) / size2.y;  
  vec2 duv = vec2(a, b);
  
  distance = texture(distances, duv + .5 / size2).r;
  d = distance;
  float max = 2.;
  if(distance > max) {
    distance = 0.;
    gl_Position = vec4(0.);
    return;
  } else {
    distance = 1. - distance / max;
  }

  vec4 p0 = texture(points, coords.xy / size + inc);
  vec4 p1 = texture(points, coords.zw / size + inc);
  
  distance = distance - pow(length(p0) / 10., 10.);
  distance = min(min(p0.a, p1.a), distance);

  if(distance == 0.) {
    gl_Position = vec4(0.);
    return;
  }

  vec4 wp0 = modelViewMatrix * vec4(p0.xyz, 1.);
  vec4 wp1 = modelViewMatrix * vec4(p1.xyz, 1.);
  vec2 dir = wp1.xy - wp0.xy;
  float angle = atan(dir.y, dir.x);
  vec2 side = position.xy * .01 * rotate2d(angle);

  vec4 p = mix(wp0, wp1, step(0., position.x));

  gl_Position = projectionMatrix * p + vec4(side, 0., 0.); 
}
`;

const lineFs = `precision highp float;

out vec4 color;

in float distance;
in vec2 vUv;
in float d;

void main() {
  color = vec4(vec3(distance * 1.), 1.);
}`;

const lineMaterial = new RawShaderMaterial({
  uniforms: {
    points: { value: pointsTexture },
    distances: { value: distancePass.texture },
  },
  depthWrite: false,
  depthTest: false,
  blending: AdditiveBlending,
  vertexShader: lineVs,
  fragmentShader: lineFs,
  side: DoubleSide,
  glslVersion: GLSL3,
});

const lineGeometry = new PlaneBufferGeometry(1, 1);
lineGeometry.setAttribute(
  "coords",
  new InstancedBufferAttribute(lineCoords, 4)
);
const lines = new InstancedMesh(lineGeometry, lineMaterial, LINES);
scene.add(lines);

const plane = new Mesh(
  new PlaneBufferGeometry(1, 1),
  new MeshBasicMaterial({ map: distancePass.texture })
);
// scene.add(plane);

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
});

camera.position.normalize().multiplyScalar(20);

renderer.setClearColor(0x101010, 1);

function render() {
  if (running) {
    particlePass.render(renderer);
    particleShader.uniforms.time.value = performance.now() / 10000;
    particleShader.uniforms.map.value = particlePass.texture;
    pointMaterial.uniforms.points.value = particlePass.texture;
    distanceShader.uniforms.points.value = particlePass.texture;
    lineMaterial.uniforms.points.value = particlePass.texture;
    plane.material.map = distancePass.texture;
  }

  distancePass.render(renderer);

  renderer.render(scene, camera);
  renderer.setAnimationLoop(render);
}

render();
