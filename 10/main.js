import {
  scene,
  renderer,
  addResize,
  resize,
  camera,
  getControls,
} from "../modules/renderer.js";
import { perlin2 } from "../third_party/perlin.js";
import {
  DataTexture,
  DoubleSide,
  FloatType,
  GLSL3,
  Mesh,
  Color,
  PlaneBufferGeometry,
  RawShaderMaterial,
  RGBFormat,
  LinearFilter,
  IcosahedronBufferGeometry,
  Vector3,
  ArrowHelper,
  MeshBasicMaterial,
  Vector2,
  Group,
} from "../third_party/three.module.js";
import { clamp, randomInRange } from "../modules/Maf.js";
import { Post } from "./post.js";
// import { capture } from "../modules/capture.js";

const post = new Post(renderer);

const vertexShader = `precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform sampler2D displacement;

out float vHeight;
out vec2 vUv;
out vec3 vPosition;

void main() {
  float d = texture(displacement, uv).r;
  vHeight = d;
  vUv = uv;
  vPosition = position + vec3(0., .5 * (d - .5), 0.);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.);
}`;

const fragmentShader = `precision highp float;

out vec4 color;

uniform sampler2D gradient;
uniform sampler2D displacement;
uniform vec2 ball;

in float vHeight;
in vec2 vUv;
in vec3 vPosition;

float aastep(in float threshold, in float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return 1.-smoothstep(threshold-afwidth, threshold+afwidth, value);
}

#define PI 3.14159265359

void main() {
  vec2 uv2 = floor(vUv * 64.) / 64.;
  float d2 = texture(displacement, uv2).r;

  float lw = 2.;
  float w;

  float gx = .5 + .5 * cos(vUv.x*64.*2.*PI-PI);
  w = fwidth(vUv.x) * lw;
  gx = aastep(w, gx);

  float gy = .5 + .5 * cos(vUv.y*64.*2.*PI-PI);
  w = fwidth(vUv.y) * lw;
  gy = aastep(w, gy);

  float grid = gx + gy;
  vec2 gridColor = round(vUv * 54.) / 54.;

  float g = d2;
  color.rgb = texture(gradient, vec2(g, 0.)).rgb;
  color.rgb *= 1. - grid;

  color.rgb *= clamp(length(vPosition.xz - ball) * 50., 0., 1.);
  color.a = 1.;
}`;

const planeVertexShader = `precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;

const planeFragmentShader = `precision highp float;

out vec4 color;

uniform sampler2D gradient;
uniform sampler2D displacement;

in vec2 vUv;

float aastep(in float threshold, in float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return 1.-smoothstep(threshold-afwidth, threshold+afwidth, value);
}

#define PI 3.14159265359

void main() {
  
  float d = texture(displacement, vUv).r;

  float lw = 1.;
  float v = .5 + .5 * sin(d*16.*2.*PI);
  float w = fwidth(d) * lw;
  v = aastep(w, v);

  color.rgb = texture(gradient, vec2(d, 0.)).rgb;
  color.a = v;
}`;

camera.position.set(1, 1, 1).normalize().multiplyScalar(2);
const controls = getControls();
const group = new Group();
scene.add(group);
group.position.y = 0.1;

const W = 128;
const H = 128;

let max = -1000;
let min = 1000;
const data = new Float32Array(W * H * 3);

const tex = new DataTexture(data, W, H, RGBFormat, FloatType);
tex.minFilter = LinearFilter;
tex.magFilter = LinearFilter;

function rot2d(x, y, a) {
  return [Math.cos(a) * x - Math.sin(a) * y, Math.sin(a) * x + Math.cos(a) * y];
}

const seed = randomInRange(-1000, 1000);
function updateNoise() {
  const t = performance.now() / 10000;
  const r = 5;
  const ox = seed + t + r * Math.cos(t);
  const oy = r * Math.sin(t);
  const a = t * 1.1;
  const s = 2 + perlin2(t, oy);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const [rx, ry] = rot2d(s * (x / W - 0.5), s * (y / H - 0.5), a);
      const d = Math.sqrt((x - 0.5 * W) ** 2 + (y - 0.5 * H) ** 2);
      const v = perlin2(rx + ox, ry + oy) + d / 100;
      min = Math.min(min, v);
      max = Math.max(max, v);
      data[(y * W + x) * 3] = v;
    }
  }
  for (let i = 0; i < data.length; i++) {
    data[i] = (data[i] - min) / (max - min);
  }
  tex.needsUpdate = true;
}

const palette = [
  "#2c7bb6",
  "#00a6ca",
  "#00ccbc",
  "#90eb9d",
  "#ffff8c",
  "#f9d057",
  "#f29e2e",
  "#e76818",
  "#d7191c",
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

const gradientMesh = new Mesh(
  new PlaneBufferGeometry(1, 1, 128, 128),
  new RawShaderMaterial({
    uniforms: {
      displacement: { value: tex },
      gradient: { value: gradient },
      ball: { value: new Vector2() },
    },
    side: DoubleSide,
    vertexShader,
    fragmentShader,
    glslVersion: GLSL3,
    wireframe: !true,
  })
);
gradientMesh.geometry.rotateX(-Math.PI / 2);
group.add(gradientMesh);

const planeMesh = new Mesh(
  new PlaneBufferGeometry(1, 1),
  new RawShaderMaterial({
    uniforms: {
      displacement: { value: tex },
      gradient: { value: gradient },
    },
    side: DoubleSide,
    vertexShader: planeVertexShader,
    fragmentShader: planeFragmentShader,
    glslVersion: GLSL3,
    wireframe: !true,
    transparent: true,
  })
);
planeMesh.geometry.rotateX(-Math.PI / 2);
planeMesh.position.y = -0.3;
group.add(planeMesh);

const ball = new Mesh(
  new IcosahedronBufferGeometry(0.02, 7),
  new MeshBasicMaterial({ color: 0 })
);
group.add(ball);

renderer.setClearColor(0x202020, 1);

const dir = new Vector3();

function getGradient(x, y, h, dir) {
  const h0 = h - data[((y - 1) * W + x) * 3];
  const h1 = h - data[((y + 1) * W + x) * 3];
  const h2 = h - data[(y * W + (x - 1)) * 3];
  const h3 = h - data[(y * W + (x + 1)) * 3];
  const dy = h0 > h1 ? -1 : 1;
  const dx = h2 > h3 ? -1 : 1;
  dir.set(dx, 0, -dy).multiplyScalar(0.0005);
}

const arrowHelper = new ArrowHelper(dir, ball.position, 0.1, 0xff00ff);
// group.add(arrowHelper);

let running = true;

function reset() {
  ball.position.set(0, 0, 0);
  speed.set(0, 0, 0);
  acc.set(0, 0, 0);
}

let spinning = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyR") {
    reset();
  }
  if (e.code === "KeyS") {
    spinning = !spinning;
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#resetBtn").addEventListener("click", (e) => {
  reset();
});

document.querySelector("#spinBtn").addEventListener("click", (e) => {
  spinning = !spinning;
});

const speed = new Vector3();
const acc = new Vector3();

let frames = 0;

function render() {
  if (running) {
    updateNoise();
  }

  if (spinning) {
    group.rotation.y -= 0.001;
  }

  speed.add(dir);
  ball.position.add(speed);
  acc.multiplyScalar(0.99);
  speed.multiplyScalar(0.99);

  ball.position.x = clamp(ball.position.x, -0.5, 0.5);
  ball.position.z = clamp(ball.position.z, -0.5, 0.5);

  let by = W - Math.round((ball.position.z + 0.5) * W);
  let bx = Math.round((ball.position.x + 0.5) * H);
  bx = clamp(bx, 1, W - 2);
  by = clamp(by, 1, H - 2);

  const y = data[(by * W + bx) * 3];
  ball.position.y = 0.5 * (y - 0.5) + 0.02;

  getGradient(bx, by, y, dir);
  acc.lerp(dir, 0.1);

  arrowHelper.position.copy(ball.position);
  arrowHelper.setDirection(dir);
  arrowHelper.setLength(0.05);

  gradientMesh.material.uniforms.ball.value.set(
    ball.position.x,
    ball.position.z
  );

  post.render(scene, camera);

  // capture(renderer.domElement);

  // if (frames > 10 * 60 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }

  frames++;

  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr) {
  post.setSize(w * dpr, h * dpr);
}
addResize(myResize);

resize();
render();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
