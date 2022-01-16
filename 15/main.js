import {
  scene,
  addResize,
  resize,
  getControls,
  renderer,
  camera,
} from "../modules/renderer.js";
import {
  Mesh,
  BoxBufferGeometry,
  DataTexture,
  RGBFormat,
  FloatType,
  LinearFilter,
  MeshNormalMaterial,
  Color,
} from "../third_party/three.module.js";
import { mergeGeometries } from "../modules/Geometry.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
import { randomInRange } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

const ssao = new SSAO();
const post = new Post(renderer);

camera.position.set(-1, 1, -1).normalize().multiplyScalar(20);
camera.lookAt(scene.position);

const sand1 = [
  "#b8987a",
  "#caa87f",
  "#dfb98a",
  "#ebc99c",
  "#f3ddb0",
  "#f9e6c1",
  "#fff3d7",
];

const sand2 = ["#f2ead6", "#327172", "#2d3e58", "#f47e72", "#f2cab1"];
const sand3 = ["#f1e2c3", "#8595a4", "#8d4f2a", "#d86b28", "#eca956"];
const sand4 = [
  "#242112",
  "#684f27",
  "#9a733a",
  "#ac8f56",
  "#e5a752",
  "#fdbe6e",
  "#ffd28f",
];
const sand5 = [
  "#44200a",
  "#75380c",
  "#9e5922",
  "#b96525",
  "#da863d",
  "#f5ad63",
  "#fec37d",
];
const palettes = [sand1, sand2, sand3, sand4, sand5];

const controls = getControls();

const LINES = 20;
const SEGMENTS = 100;
const geometries = [];
for (let i = 0; i < LINES; i++) {
  const boxGeo = new BoxBufferGeometry(
    10,
    1,
    10 / LINES - 0.2,
    SEGMENTS,
    1,
    1
  ).toNonIndexed();
  boxGeo.translate(0, 0, (i * 10) / LINES - ((10 / LINES) * (LINES - 1)) / 2);
  geometries.push(boxGeo);
}
const geo = mergeGeometries(geometries);

const mesh = new Mesh(geo, new MeshNormalMaterial());
scene.add(mesh);

ssao.lines = LINES;

let speed = 1;
let curSpeed = 0;
let height = 1;
let curHeight = 0;

randomize();

function randomize() {
  ssao.factor = randomInRange(0.5, 2);
  speed = randomInRange(0.5, 5);
  height = randomInRange(0.5, 1.5);
  const palette = palettes[Math.floor(Math.random() * palettes.length)];

  const gradient = new GradientLinear(palette);
  const bkg = gradient.getAt(Math.random(), 1);
  const t = new Color();
  bkg.getHSL(t);
  // t.h -= 0.1;
  t.s /= 2;
  t.l /= 2;
  bkg.setHSL(t.h, t.s, t.l);
  renderer.setClearColor(bkg);

  const gradientData = new Float32Array(palette.length * 3);
  for (let i = 0; i < palette.length; i++) {
    // const c = gradient.getAt(i / palette.length);
    const c = gradient.getAt(Math.random());
    gradientData[i * 3] = c.r;
    gradientData[i * 3 + 1] = c.g;
    gradientData[i * 3 + 2] = c.b;
  }
  const gradientTex = new DataTexture(
    gradientData,
    palette.length,
    1,
    RGBFormat,
    FloatType,
    undefined,
    undefined,
    undefined,
    LinearFilter,
    LinearFilter
  );

  ssao.gradient = gradientTex;
}

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
  if (e.code === "Space") {
    running = !running;
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

let time = 0;
let prevTime = performance.now();

function render() {
  if (frames % 120 === 0) {
    randomize();
  }

  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    curSpeed += (speed - curSpeed) * 0.9;
    curHeight += (height - curHeight) * 0.1;
    time += (curSpeed * dt) / 1000;
    ssao.time = time;
    ssao.height = curHeight;
  }
  ssao.render(renderer, scene, camera);
  post.source = ssao.output;
  post.render(scene, camera);

  // renderer.render(scene, camera);
  // capture(renderer.domElement);
  // if (frames > 20 * 60 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }

  frames++;
  renderer.setAnimationLoop(render);
}

addResize((w, h, dpr) => {
  ssao.setSize(w, h, dpr);
  post.setSize(w, h, dpr);
});

resize();

render();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
