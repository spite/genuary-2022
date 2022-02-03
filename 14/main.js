import { map, randomInRange } from "../modules/Maf.js";
import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  AdditiveBlending,
  DataTexture,
  DoubleSide,
  FloatType,
  GLSL3,
  InstancedBufferAttribute,
  InstancedMesh,
  LinearFilter,
  NearestFilter,
  PlaneBufferGeometry,
  RawShaderMaterial,
  RGBAFormat,
  RGBFormat,
  Vector2,
  Vector3,
  Color,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";
import { shader as curl } from "../shaders/curl.js";
import { pointsOnSphere } from "../modules/Fibonacci.js";

import { Post } from "./post.js";

const post = new Post(renderer);

const controls = getControls();

const pointVs = `precision highp float;

in vec3 position;
in vec2 coord;
in vec2 uv;

uniform sampler2D points;
uniform float size;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  vec4 p = texture(points, coord);
  float d = 1. - pow(length(p) / 10., 10.);;
  gl_Position = projectionMatrix * (modelViewMatrix * vec4(p.xyz, 1.) + p.a * d * .5 * size * vec4(position.xyz, 0.));  
}`;

const pointFs = `precision highp float;

in vec2 vUv;

out vec4 color;

void main() {
  float d = length(.5 - vUv);
  if(d > .5) {
    discard;
  }
  color = vec4(1.);
}`;

let WIDTH;
let HEIGHT;
let POINTS;
let pointsTexture;
let points;
let lines;

const statsDiv = document.querySelector("#statsDiv");

function resizeBuffers(w, h) {
  if (points) {
    scene.remove(points);
    points.geometry.dispose();
  }
  if (lines) {
    scene.remove(lines);
    lines.geometry.dispose();
  }

  WIDTH = w;
  HEIGHT = h;
  POINTS = WIDTH * HEIGHT;

  const positions = new Float32Array(POINTS * 4);
  pointsTexture = new DataTexture(
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

  let ptr = 0;
  const coords = new Float32Array(WIDTH * HEIGHT * 2);
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      coords[ptr++] = x / WIDTH;
      coords[ptr++] = y / HEIGHT;
    }
  }
  pointGeo.setAttribute("coord", new InstancedBufferAttribute(coords, 2));

  points = new InstancedMesh(pointGeo, pointMaterial, POINTS);
  scene.add(points);

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

  const lineGeometry = new PlaneBufferGeometry(1, 1);
  lineGeometry.setAttribute(
    "coords",
    new InstancedBufferAttribute(lineCoords, 4)
  );
  lines = new InstancedMesh(lineGeometry, lineMaterial, LINES);
  scene.add(lines);

  statsDiv.textContent = `${POINTS.toLocaleString()} points, ${LINES.toLocaleString()} lines.`;

  particlePass.setSize(WIDTH, HEIGHT);
  distancePass.setSize(POINTS, POINTS);
  distancePass.shader.uniforms.size.value.set(POINTS, POINTS);
  lineMaterial.uniforms.multiplier.value = map(20, 80, 4, 0.5, WIDTH);
  randomize();
  reset();
}

function getFibPoints(r) {
  const pts = pointsOnSphere(POINTS);
  const v = new Vector3();
  return (i) => {
    v.copy(pts[i]);
    v.normalize().multiplyScalar(r);
    return v;
  };
}

function getRandPoints(r) {
  const v = new Vector3();
  return (i) => {
    v.set(randomInRange(-r, r), randomInRange(-r, r), randomInRange(-r, r));
    return v;
  };
}

function randomPoints() {
  let ptr = 0;

  const r = randomInRange(4, 6);
  const fns = [getFibPoints(r), getRandPoints(r)];
  const fn = fns[Math.floor(Math.random() * fns.length)];

  const positions = pointsTexture.image.data;

  for (let i = 0; i < POINTS; i++) {
    const v = fn(i);
    positions[ptr++] = v.x;
    positions[ptr++] = v.y;
    positions[ptr++] = v.z;
    positions[ptr++] = randomInRange(0, 100);
  }
  pointsTexture.needsUpdate = true;
}

const pointMaterial = new RawShaderMaterial({
  uniforms: {
    points: { value: pointsTexture },
    size: { value: 1 },
  },
  vertexShader: pointVs,
  fragmentShader: pointFs,
  glslVersion: GLSL3,
  depthWrite: false,
  depthTest: false,
});

const particleFs = `precision highp float;

in vec2 vUv;

uniform sampler2D points;
uniform sampler2D map;
uniform float speed;
uniform float noiseScale;
uniform float persistence;
uniform float time;

out vec4 color;

${curl}

void main() {
  vec4 c = texture(map, vUv);
  vec3 dir = curlNoise(c.xyz * noiseScale / 20., time);
  c.xyz += normalize(dir) * .02 * speed;
  // c.xyz += round(normalize(dir)) * .02 * speed;
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
    noiseScale: { value: 1 },
    speed: { value: 1 },
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

const lineVs = `precision highp float;

in vec3 position;
in vec4 coords;
in vec2 uv;

uniform sampler2D points;
uniform sampler2D distances;
uniform float max;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out float distance;
out vec2 vUv;
out float d;

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
  vec2 side = vec2(0., position.y) * .01 * rotate2d(angle);

  vec4 p = mix(wp0, wp1, step(0., position.x));

  gl_Position = projectionMatrix * p + vec4(side, 0., 0.); 
}
`;

const lineFs = `precision highp float;

in float distance;
in vec2 vUv;
in float d;
in vec3 colorFrom;
in vec3 colorTo;

uniform float max;
uniform float multiplier;

out vec4 color;

float map(float value, float inMin, float inMax, float outMin, float outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

void main() {
  float factor = map(max, .5, 2., 1., .01) * multiplier;
  color = vec4(vec3(distance * factor), 1.);
}`;

const lineMaterial = new RawShaderMaterial({
  uniforms: {
    points: { value: pointsTexture },
    distances: { value: distancePass.texture },
    max: { value: 2 },
    multiplier: { value: 1 },
  },
  depthWrite: false,
  depthTest: false,
  blending: AdditiveBlending,
  vertexShader: lineVs,
  fragmentShader: lineFs,
  side: DoubleSide,
  glslVersion: GLSL3,
});

let running = true;

function randomize() {
  pointMaterial.uniforms.size.value = randomInRange(1, 4);
  lineMaterial.uniforms.max.value = randomInRange(0.5, 2);
  particleShader.uniforms.persistence.value = randomInRange(0.5, 2);
  particleShader.uniforms.noiseScale.value = randomInRange(0.5, 2);
  particleShader.uniforms.speed.value = randomInRange(0.5, 2);
}

function reset() {
  randomPoints();
  particleShader.uniforms.map.value = pointsTexture;
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyR") {
    randomize();
  }
  if (e.code === "KeyS") {
    reset();
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

document.querySelector("#resetBtn").addEventListener("click", (e) => {
  reset();
});

document.querySelector("#lowBtn").addEventListener("click", (e) => {
  resizeBuffers(20, 20);
});

document.querySelector("#mediumBtn").addEventListener("click", (e) => {
  resizeBuffers(40, 40);
});

document.querySelector("#highBtn").addEventListener("click", (e) => {
  resizeBuffers(60, 60);
});

document.querySelector("#insaneBtn").addEventListener("click", (e) => {
  resizeBuffers(80, 80);
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
  }

  distancePass.render(renderer);

  post.render(scene, camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr) {
  post.setSize(w * dpr, h * dpr);
}
addResize(myResize);

resizeBuffers(40, 40);

resize();
render();
