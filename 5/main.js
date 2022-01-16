import {
  scene,
  getControls,
  renderer,
  addUpdate,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  BufferGeometry,
  Line,
  LineBasicMaterial,
  Points,
  BufferAttribute,
  PointsMaterial,
  Vector2,
  Vector3,
} from "../third_party/three.module.js";
import { perlin2 } from "../third_party/perlin.js";
import { randomInRange, mod } from "../modules/Maf.js";
import { DOFRenderer } from "../modules/dof-renderer.js";

import * as dat from "../third_party/dat.gui.module.js";

class Params {
  constructor() {
    this.exposure = 0.1;
    this.iso = 1;
    this.focalDistance = 50;
    this.dofStrength = 2;
    this.dofRange = 0.01;
  }
}
const params = new Params();

// const gui = new dat.GUI();
// gui.add(params, "exposure", 0.01, 1).listen();
// gui.add(params, "iso", 1, 100).listen();
// gui.add(params, "focalDistance", 0, 100).listen();
// gui.add(params, "dofStrength", 0.01, 3).listen();
// gui.add(params, "dofRange", 0, 1).listen();

function syncParams() {
  dofRenderer.setParams({
    focalDistance: params.focalDistance,
    dofRange: params.dofRange,
    dofStrength: params.dofStrength,
    iso: params.iso,
    exposure: params.exposure,
  });
}

// for (const controller of gui.__controllers) {
//   controller.onChange((e) => {
//     dofRenderer.reset();
//     syncParams();
//   });
// }

const dofRenderer = new DOFRenderer(renderer);
dofRenderer.finalShader.uniforms.invert.value = true;

const controls = getControls();

const POINTS = 300;

function generateSquare() {
  const points = [];
  const r = 1;
  const s = Math.sqrt(2) / 2;
  for (let i = 0; i < POINTS; i++) {
    const a = (i * 2 * Math.PI) / POINTS;
    let x = r * Math.cos(a);
    let y = r * Math.sin(a);
    if (x < -s) x = -s;
    if (x > s) x = s;
    if (y < -s) y = -s;
    if (y > s) y = s;
    points.push(new Vector2(x, y));
  }
  return points;
}

function generateCircle() {
  const points = [];
  const r = 1;
  for (let i = 0; i < POINTS; i++) {
    const a = (i * 2 * Math.PI) / POINTS;
    const x = r * Math.cos(a);
    const y = r * Math.sin(a);
    points.push(new Vector2(x, y));
  }
  return points;
}

function generatePolygon(sides) {
  const points = [];
  const b = (2 * Math.PI) / sides;
  const r = 1;
  const p0 = new Vector2();
  const p1 = new Vector2();
  for (let i = 0; i < POINTS; i++) {
    const a = (i * 2 * Math.PI) / POINTS;
    const g = mod(a, b);
    const aa = (Math.floor((i * sides) / POINTS) * 2 * Math.PI) / sides;
    p0.set(r * Math.cos(aa), r * Math.sin(aa));
    p1.set(r * Math.cos(aa + b), r * Math.sin(aa + b));
    const p = new Vector2();
    p.lerpVectors(p0, p1, g / b);
    points.push(p);
  }
  return points;
}

function generateBlob() {
  const points = [];
  const s = randomInRange(1, 5);
  for (let i = 0; i < POINTS; i++) {
    const a = (i * 2 * Math.PI) / POINTS;
    const x = Math.cos(a);
    const y = Math.sin(a);
    const r = 1 + 0.5 + 0.5 * perlin2(x * s, y * s);
    const p = new Vector2(x, y);
    p.multiplyScalar(r);
    points.push(p);
  }
  return points;
}

const sq = generateSquare();

const material = new LineBasicMaterial({ color: 0xff00ff });
// const material = new PointsMaterial({ color: 0xff00ff, size: 0.01 });
function generateShape(shape, scale = 1) {
  const points = [];
  for (const p of shape) {
    points.push(new Vector3(p.x, p.y, 0));
  }
  points.push(new Vector3(shape[0].x, shape[0].y, 0));
  for (const p of points) {
    p.multiplyScalar(scale);
  }
  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);
  return line;
  const pts = new Points(geometry, material);
  return pts;
}

controls.addEventListener("change", (e) => dofRenderer.reset());

const axis = new Vector3(0, 0, 1);

function blendShape(s0, s1) {
  while (dofRenderer.scene.children.length) {
    const l = dofRenderer.scene.children[0];
    dofRenderer.scene.remove(l);
    l.geometry.dispose();
  }

  const fRot = randomInRange(0.05, 0.05);
  const fScale = randomInRange(9, 12);

  const STEPS = 500;
  const p = new Vector2();
  const shapes = [];
  for (let i = 0; i < STEPS; i++) {
    const shape = [];
    const a = (fRot * (i * 2 * Math.PI)) / STEPS;
    for (let j = 0; j < s0.length; j++) {
      const z = 1 - i / STEPS;
      const t = i / STEPS;
      p.copy(s0[j]).lerp(s1[j], t);
      const pt = new Vector3(p.x, p.y, z);
      pt.applyAxisAngle(axis, a);
      pt.multiplyScalar(fScale);
      shape.push(pt);
    }
    shapes.push(shape);
  }

  const LINES = POINTS * STEPS;
  const lineGeometry = new BufferGeometry();
  const fromPositions = new Float32Array(LINES * 3);
  const toPositions = new Float32Array(LINES * 3);
  const lineSizes = new Float32Array(LINES);
  const lineSeeds = new Float32Array(LINES);
  const lineColors = new Float32Array(LINES * 3);

  let ptr = 0;
  for (let i = 0; i < STEPS; i++) {
    const shape = shapes[i];
    for (let j = 0; j < POINTS; j++) {
      const from = shape[j];
      const to = shape[mod(j + 1, POINTS)];
      fromPositions[ptr * 3] = from.x;
      fromPositions[ptr * 3 + 1] = from.y;
      fromPositions[ptr * 3 + 2] = from.z;
      toPositions[ptr * 3] = to.x;
      toPositions[ptr * 3 + 1] = to.y;
      toPositions[ptr * 3 + 2] = to.z;
      lineSizes[ptr] = 1;
      lineSeeds[ptr] = Math.random() * 1000000;
      // const { r, g, b } = gradient.getAt(ptr / LINES);
      const [r, g, b] = [1, 1, 1];
      lineColors[ptr * 3] = r;
      lineColors[ptr * 3 + 1] = g;
      lineColors[ptr * 3 + 2] = b;
      ptr++;
    }
  }

  lineGeometry.setAttribute("position", new BufferAttribute(fromPositions, 3));
  lineGeometry.setAttribute("to", new BufferAttribute(toPositions, 3));
  lineGeometry.setAttribute("size", new BufferAttribute(lineSizes, 1));
  lineGeometry.setAttribute("seed", new BufferAttribute(lineSeeds, 1));
  lineGeometry.setAttribute("color", new BufferAttribute(lineColors, 3));
  dofRenderer.addLines(lineGeometry);
}

function randomize() {
  dofRenderer.reset();
  dofRenderer.setParams({
    dofStrength: randomInRange(1.6, 2.2),
    //    dofRange: randomInRange(0.01, 0.03),
  });

  const s = Math.floor(Math.random() * 3);
  let shape;
  switch (s) {
    case 0:
      shape = generateCircle();
      break;
    case 1:
      shape = generateBlob();
      break;
    case 2:
      const sides = Math.round(randomInRange(5, 8));
      shape = generatePolygon(sides);
  }

  blendShape(sq, shape);
}

randomize();

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

renderer.autoClear = false;

camera.position.normalize().multiplyScalar(55);

function render() {
  dofRenderer.setParams({
    focalDistance: 1 * camera.position.length(),
  });

  dofRenderer.render(camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h) {
  dofRenderer.setSize(w, h);
}
addResize(myResize);

syncParams();
resize();
render();
