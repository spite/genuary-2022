import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  GLSL3,
  RawShaderMaterial,
  MeshNormalMaterial,
  FloatType,
  InstancedMesh,
  Color,
  DataTexture,
  RGBFormat,
  LinearFilter,
  Object3D,
  CylinderBufferGeometry,
  Vector3,
} from "../third_party/three.module.js";
import { ShaderTexture } from "../modules/ShaderTexture.js";
import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
import { randomInRange } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

const WIDTH = 100;
const HEIGHT = 100;

const ssao = new SSAO();
const post = new Post(renderer);
const controls = getControls();

// const gl = renderer.getContext();
// gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);

renderer.setClearColor(0xffffff, 1);
camera.position.set(0.8, 0.8, 0.8);
camera.lookAt(scene.position);

controls.enablePan = false;
controls.minPolarAngle = -Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2 - 0.1;

const seed = Math.random();

const noiseVs = `
precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}`;

const noiseFs = `
precision highp float;

in vec2 vUv;

uniform float seed;
uniform float time;

uniform float phase;
uniform float speed;
uniform float weight;

out vec4 fragColor;

// https://www.shadertoy.com/view/MdXyzX

#define DRAG_MULT 0.048

vec2 wavedx(vec2 position, vec2 direction, float speed, float frequency, float timeshift) {
  float x = dot(direction, position) * frequency + timeshift * speed;
  float wave = exp(sin(x) - 1.0);
  float dx = wave * cos(x);
  return vec2(wave, -dx);
}

float getWaves(vec2 position, int iterations){
  float iter = 0.0;
  float w = 0.0;
  float ws = 0.0;
  float cWeight = weight;
  float cSpeed = speed;
  float cPhase = phase;
  for(int i=0;i<iterations;i++){
    vec2 p = vec2(sin(iter), cos(iter));
    vec2 res = wavedx(position, p, cSpeed, cPhase, time);
    position += p * res.y * cWeight * DRAG_MULT;
    w += res.x * cWeight;
    iter += 12.0;
    ws += cWeight;
    cWeight = mix(cWeight, 0.0, 0.2);
    cPhase *= 1.18;
    cSpeed *= 1.07;
  }
  return w / ws;
}

void main() {
  vec2 uv = vUv * 2.;
  float n = 2. *getWaves(uv, 20) - .5;
  fragColor = vec4(n);
}
`;

const noiseShader = new RawShaderMaterial({
  uniforms: {
    seed: { value: seed },
    time: { value: 0 },
    phase: { value: 6 },
    speed: { value: 20 },
    weight: { value: 1 },
  },
  vertexShader: noiseVs,
  fragmentShader: noiseFs,
  glslVersion: GLSL3,
});

const noiseTexture = new ShaderTexture(
  renderer,
  noiseShader,
  WIDTH,
  HEIGHT,
  null,
  FloatType
);
noiseTexture.render();
ssao.shader.uniforms.heightMap.value = noiseTexture.texture;

const palette = [
  "#0e0860",
  "#1a267b",
  "#304a9e",
  "#426cbe",
  "#548fdd",
  "#64b0fc",
];

const gradientData = new Uint8Array(palette.length * 3);
for (let i = 0; i < palette.length; i++) {
  const c = new Color(palette[i]);
  gradientData[i * 3] = c.r * 255;
  gradientData[i * 3 + 1] = c.g * 255;
  gradientData[i * 3 + 2] = c.b * 255;
}
const gradient = new DataTexture(gradientData, palette.length, 1, RGBFormat);
gradient.minFilter = LinearFilter;
gradient.magFilter = LinearFilter;

ssao.shader.uniforms.gradient.value = gradient;

const s = 1 / WIDTH;
const f = Math.sqrt(3);
const geometry = new CylinderBufferGeometry(s / f, s / f, s, 6, 2);

const vertices = geometry.attributes.position.array;
const v = new Vector3();
const n = new Vector3();
for (let i = 0; i < vertices.length; i += 3) {
  v.set(vertices[i], vertices[i + 1], vertices[i + 2]);
  if (v.y > 0) {
    const a = Math.atan2(v.z, v.x);
    const r = Math.sqrt(v.x * v.x + v.z * v.z) - 0.1 / WIDTH;
    v.x = r * Math.cos(a);
    v.z = r * Math.sin(a);
  }
  if (v.y === 0) {
    v.y = s / 2 - 0.1 / WIDTH;
  }
  vertices[i] = v.x;
  vertices[i + 1] = v.y;
  vertices[i + 2] = v.z;
}
// geometry.computeVertexNormals();

const points = [];
const dummy = new Object3D();

for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    dummy.position.set(x / WIDTH, 0, ((y / HEIGHT) * f) / 2);
    if (y % 2 === 1) {
      dummy.position.x += s / 2;
      // dummy.position.y += s / 4;
    }
    const d = (dummy.position.x - 0.5) ** 2 + (dummy.position.z - 0.5) ** 2;
    if (d < 0.125) {
      points.push(dummy.position.clone());
    }
  }
}

const mesh = new InstancedMesh(
  geometry,
  new MeshNormalMaterial(),
  points.length
);
scene.add(mesh);

let ptr = 0;

for (let i = 0; i < points.length; i++) {
  dummy.position.copy(points[i]);
  dummy.updateMatrix();
  mesh.setMatrixAt(i, dummy.matrix);
}

let running = true;

function randomize() {
  noiseShader.uniforms.speed.value = randomInRange(10, 30);
  noiseShader.uniforms.phase.value = randomInRange(4, 8);
  noiseShader.uniforms.weight.value = randomInRange(0.5, 2);
  const f = Math.floor(Math.random() * 4);
  if (f === 0) {
    ssao.shader.uniforms.blockiness.value = Math.round(randomInRange(30, 50));
  } else if (f === 1) {
    ssao.shader.uniforms.blockiness.value = Math.round(randomInRange(50, 100));
  } else if (f == 2) {
    ssao.shader.uniforms.blockiness.value = Math.round(
      randomInRange(100, 2000)
    );
  } else {
    ssao.shader.uniforms.blockiness.value = Math.round(
      randomInRange(200, 10000)
    );
  }
}

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }

  if (e.code === "KeyR") {
    randomize();
  }
});

async function update() {
  noiseTexture.shader.uniforms.time.value = time / 10000;
  noiseTexture.render();
  ssao.shader.uniforms.factor.value = WIDTH;
  ssao.shader.uniforms.time.value = time / 10000;
}

function myResize(w, h, dPR) {
  ssao.setSize(w, h, dPR);
  post.setSize(w, h, dPR);
}

let time = 0;
let prevTime = performance.now();
let frames = 0;

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    time += dt;
    update();
  }

  mesh.rotation.y = time / 5000;

  ssao.render(renderer, scene, camera);
  post.render(ssao.output);

  // capture(renderer.domElement);

  // if (frames % 120 === 0) {
  //   // randomize();
  // }
  // if (frames > 10 * 60 && window.capturer.capturing) {
  //   window.capturer.stop();
  // }

  frames++;

  renderer.setAnimationLoop(render);
}

addResize(myResize);

resize();
render();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
