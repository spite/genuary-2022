import {
  addResize,
  resize,
  scene,
  renderer,
  camera,
  getControls,
} from "../modules/renderer.js";
import {
  BufferGeometry,
  BufferAttribute,
  Vector3,
  Vector4,
} from "../third_party/three.module.js";
import { data } from "./entries.js";
import { curl, generateNoiseFunction } from "../modules/curl.js";
import { loadKanjiFromGitHub } from "./kanji.js";
import { DOFRenderer } from "../modules/dof-renderer.js";
import * as dat from "../third_party/dat.gui.module.js";
import { mix } from "../modules/Maf.js";
import { Easings } from "../modules/easings.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import {
  circus,
  warm,
  warm2,
  warm3,
  natural,
  natural2,
  circus2,
  seaside,
  dragon,
} from "../modules/palettes.js";

// https://github.com/KanjiVG/kanjivg

const kanjis = data.tree.map((e) => e.path);

class Params {
  constructor() {
    this.exposure = 0.3;
    this.iso = 1;
    this.focalDistance = 17;
    this.dofStrength = 2;
    this.dofRange = 0.04;
  }
}
const params = new Params();

const gui = new dat.GUI();
gui.add(params, "exposure", 0.01, 1, 0.01).listen();
// gui.add(params, "iso", 1, 100).listen();
gui.add(params, "focalDistance", 0, 100, 0.01).listen();
gui.add(params, "dofStrength", 0.01, 3, 0.01).listen();
gui.add(params, "dofRange", 0, 1, 0.01).listen();
// dat.GUI.toggleHide();
gui.closed = true;

function syncParams() {
  dofRenderer.setParams({
    focalDistance: params.focalDistance,
    dofRange: params.dofRange,
    dofStrength: params.dofStrength,
    iso: params.iso,
    exposure: params.exposure,
  });
}

for (const controller of gui.__controllers) {
  controller.onChange((e) => {
    dofRenderer.reset();
    syncParams();
  });
}
const dofRenderer = new DOFRenderer(renderer);

const ITERATIONS = 10;
let fn = generateNoiseFunction();

let twist = false;
const tmp = new Vector3();
const s = new Vector3(0.5, 0.5, 1.5);

function iteratePoint(p) {
  for (let i = 0; i < ITERATIONS; i++) {
    tmp.copy(p).multiplyScalar(0.01);
    const dir = curl(tmp, fn);
    dir.normalize().multiply(s);
    p.add(dir);
    // p.z += dir.z;
  }
}

const palettes = [
  circus,
  warm,
  warm2,
  warm3,
  natural,
  natural2,
  circus2,
  seaside,
  dragon,
];

function getPalette() {
  const src = palettes[Math.floor(Math.random() * palettes.length)];
  const gradient = new GradientLinear(src);
  const colors = [];
  for (let i = 0; i < 2; i++) {
    colors.push(gradient.getAt(Math.random()));
  }
  return new GradientLinear(colors);
}

function kanjiToDofLines(lines) {
  const gradient = getPalette();
  const POINTS = lines.reduce((ac, v) => ac + v.points.length - 1, 0);
  const geometry = new BufferGeometry();
  const positions = new Float32Array(POINTS * 3);
  const to = new Float32Array(POINTS * 3);
  const sizes = new Float32Array(POINTS);
  const seeds = new Float32Array(POINTS);
  const colors = new Float32Array(POINTS * 3);
  let ptr = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.points.length - 1; j++) {
      const fromPoint = line.points[j];
      const toPoint = line.points[j + 1];
      positions[ptr] = fromPoint.x;
      positions[ptr + 1] = -fromPoint.y;
      positions[ptr + 2] = fromPoint.z;
      to[ptr] = toPoint.x;
      to[ptr + 1] = -toPoint.y;
      to[ptr + 2] = toPoint.z;
      sizes[ptr / 3] = 2 * line.sizes[j];
      seeds[ptr / 3] = Math.random() * 1000000;
      const { r, g, b } = gradient.getAt(ptr / 3 / POINTS);
      colors[ptr] = (1 - r) * 10;
      colors[ptr + 1] = (1 - g) * 10;
      colors[ptr + 2] = (1 - b) * 10;
      ptr += 3;
    }
  }
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setAttribute("to", new BufferAttribute(to, 3));
  geometry.setAttribute("size", new BufferAttribute(sizes, 1));
  geometry.setAttribute("seed", new BufferAttribute(seeds, 1));
  geometry.setAttribute("color", new BufferAttribute(colors, 3));
  dofRenderer.addLines(geometry);
  loading = false;
}

let loading = false;

async function load() {
  if (loading) {
    return;
  }
  loading = true;
  // const kanjis = await loadKanjis();
  const lines = await loadKanjiFromGitHub(
    kanjis[Math.floor(Math.random() * kanjis.length)]
  );
  // const lines = await loadKanjiFromGitHub("09481.svg");
  const sizes = [];

  let min = { x: Infinity, y: Infinity };
  let max = { x: -Infinity, y: -Infinity };
  for (const line of lines) {
    let ptr = 0;
    const sizes = [];
    for (const p of line.points) {
      if (twist) {
        iteratePoint(p);
      }
      p.multiplyScalar(0.1);
      min.x = Math.min(min.x, p.x);
      min.y = Math.min(min.y, p.y);
      max.x = Math.max(max.x, p.x);
      max.y = Math.max(max.y, p.y);

      const s = mix(0, 1, Easings.OutQuint(ptr / line.points.length));
      sizes.push(s);
      ptr++;
    }
    line.sizes = sizes;
  }
  let c = { x: min.x + (max.x - min.x) / 2, y: min.y + (max.y - min.y) / 2 };

  for (const line of lines) {
    for (const p of line.points) {
      p.x -= c.x;
      p.y -= c.y;
    }
  }

  kanjiToDofLines(lines);
  dofRenderer.reset();
}

load();

function randomize() {
  if (twist) {
    fn = generateNoiseFunction();
  }
  dofRenderer.clear();
  load();
}

const controls = getControls();
controls.addEventListener("change", (e) => dofRenderer.reset());

function focus() {
  params.focalDistance = camera.position.length();
  dofRenderer.reset();
  syncParams();
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
  if (e.code === "Space") {
    focus();
  }
  if (e.code === "KeyT") {
    twist = !twist;
    randomize();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

document.querySelector("#focusBtn").addEventListener("click", (e) => {
  focus();
});

document.querySelector("#twistBtn").addEventListener("click", (e) => {
  twist = !twist;
  randomize();
});

camera.position.set(0.5, -0.5, 1).normalize().multiplyScalar(17);
camera.lookAt(scene.position);
focus();

renderer.setClearColor(0x101010, 1);
dofRenderer.finalShader.uniforms.invert.value = true;

function render() {
  dofRenderer.render(camera);
  //  renderer.render(scene, camera);
  renderer.setAnimationLoop(render);
}
renderer.autoClear = false;

function myResize(w, h) {
  dofRenderer.setSize(w, h);
  dofRenderer.reset();
}
addResize(myResize);

syncParams();
resize();
render();
