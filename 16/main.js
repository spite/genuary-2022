import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import { curl, generateNoiseFunction } from "../modules/curl.js";
import {
  AdditiveBlending,
  Box3,
  BufferAttribute,
  BufferGeometry,
  Color,
  GLSL3,
  LineBasicMaterial,
  LineSegments,
  RawShaderMaterial,
  Vector3,
} from "../third_party/three.module.js";
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
import { parabola, randomInRange } from "../modules/Maf.js";
import { DOFRenderer } from "../modules/dof-renderer.js";
import * as dat from "../third_party/dat.gui.module.js";

class Params {
  constructor() {
    this.exposure = 0.3;
    this.iso = 1;
    this.focalDistance = 13;
    this.dofStrength = 2;
    this.dofRange = 0.04;
  }
}
const params = new Params();

const gui = new dat.GUI();
gui.add(params, "exposure", 0.01, 1).listen();
// gui.add(params, "iso", 1, 100).listen();
gui.add(params, "focalDistance", 0, 100).listen();
gui.add(params, "dofStrength", 0.01, 3).listen();
gui.add(params, "dofRange", 0, 1).listen();
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

let fn;

const vertexShader = `precision highp float;

in vec3 position;
in vec3 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec3 vColor;

void main() {
  vColor = color;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;

const fragmentShader = `precision highp float;

in vec3 vColor;

out vec4 color;

void main() {
  color = vec4(vColor,1.);
}`;

const controls = getControls();
controls.addEventListener("change", (e) => dofRenderer.reset());

const segments = [];
const colors = [];

const scale = 0.2;

function growStrand(p, dir, c) {
  const nDir = curl(p.clone().multiplyScalar(scale), fn);
  nDir.normalize().multiplyScalar(0.05);
  dir.lerp(nDir, 0.1);
  segments.push(p.clone());
  segments.push(p.clone().add(dir));
  colors.push(c);
  colors.push(c);
  p.add(dir);
}

function addStrand(pos, length, dir, from, to) {
  const gradient = new GradientLinear([from, to]);
  pos.add(dir);
  for (let i = 0; i < length; i++) {
    growStrand(pos, dir, gradient.getAt(i / length));
  }
}

// const mat = new LineBasicMaterial({ color: 0xff00ff });
const mat = new RawShaderMaterial({
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  blending: AdditiveBlending,
});

let mesh;

const bb = new Box3();

function addDOFLines() {
  const center = new Vector3();
  bb.getCenter(center);

  const LINES = segments.length / 2;
  const lineGeometry = new BufferGeometry();
  const fromPositions = new Float32Array(LINES * 3);
  const toPositions = new Float32Array(LINES * 3);
  const lineSizes = new Float32Array(LINES);
  const lineSeeds = new Float32Array(LINES);
  const lineColors = new Float32Array(LINES * 3);

  let ptr = 0;

  for (let j = 0; j < segments.length; j += 2) {
    const from = segments[j];
    const to = segments[j + 1];
    fromPositions[ptr * 3] = from.x - center.x;
    fromPositions[ptr * 3 + 1] = from.y - center.y;
    fromPositions[ptr * 3 + 2] = from.z - center.z;
    toPositions[ptr * 3] = to.x - center.x;
    toPositions[ptr * 3 + 1] = to.y - center.y;
    toPositions[ptr * 3 + 2] = to.z - center.z;
    lineSizes[ptr] = 0.1;
    lineSeeds[ptr] = Math.random() * 1000000;
    const c = colors[j];
    lineColors[ptr * 3] = c.r;
    lineColors[ptr * 3 + 1] = c.g;
    lineColors[ptr * 3 + 2] = c.b;
    ptr++;
  }

  lineGeometry.setAttribute("position", new BufferAttribute(fromPositions, 3));
  lineGeometry.setAttribute("to", new BufferAttribute(toPositions, 3));
  lineGeometry.setAttribute("size", new BufferAttribute(lineSizes, 1));
  lineGeometry.setAttribute("seed", new BufferAttribute(lineSeeds, 1));
  lineGeometry.setAttribute("color", new BufferAttribute(lineColors, 3));
  dofRenderer.addLines(lineGeometry);
}

function addLines() {
  const geo = new BufferGeometry().setFromPoints(segments);
  const c = new Float32Array(colors.length * 3);
  for (let i = 0; i < colors.length; i++) {
    c[i * 3] = colors[i].r;
    c[i * 3 + 1] = colors[i].g;
    c[i * 3 + 2] = colors[i].b;
  }
  geo.setAttribute("color", new BufferAttribute(c, 3));
  mesh = new LineSegments(geo, mat);
  scene.add(mesh);
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
  for (let i = 0; i < 10; i++) {
    colors.push(gradient.getAt(Math.random()));
  }
  return new GradientLinear(colors);
}

function randomize() {
  dofRenderer.clear();

  if (mesh) {
    scene.remove(mesh);
  }

  fn = generateNoiseFunction();

  segments.length = 0;
  colors.length = 0;
  bb.makeEmpty();

  const o = new Vector3();
  const mainGradient = getPalette();
  const outerGradient = getPalette();
  const dir = new Vector3();

  const LENGTH = 100;
  const RADIUS = 50;

  const n = 0.01;
  o.set(0, 0, 0);
  for (let i = 1; i < LENGTH; i++) {
    for (let j = 0; j < RADIUS; j++) {
      const a = (j * 2 * Math.PI) / RADIUS;
      dir.set(0, Math.cos(a), Math.sin(a)).normalize().multiplyScalar(0.1);
      const d = curl(o.clone().multiplyScalar(0.1), fn);
      d.normalize().multiplyScalar(0.005);
      o.add(d);
      bb.expandByPoint(o);
      addStrand(
        o.clone(),
        100 * parabola(i / LENGTH, 1),
        dir,
        mainGradient.getAt(i / LENGTH),
        outerGradient.getAt(i / LENGTH)
      );
    }
  }

  addDOFLines();
  dofRenderer.reset();
}

randomize();

function focus() {
  dofRenderer.setParams({
    focalDistance: 1.1 * camera.position.length(),
  });
  dofRenderer.reset();
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
  if (e.code === "Space") {
    focus();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

document.querySelector("#focusBtn").addEventListener("click", (e) => {
  focus();
});

camera.position.set(1, 1, 1).normalize().multiplyScalar(12);

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
