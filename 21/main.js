import {
  scene,
  renderer,
  camera,
  getControls,
  addResize,
  resize,
} from "../modules/renderer.js";
import { group as lines, renderLines, group, getPalette } from "./field.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { DOFRenderer } from "../modules/dof-renderer.js";
import * as dat from "../third_party/dat.gui.module.js";

camera.position.normalize().multiplyScalar(1.604);

class Params {
  constructor() {
    this.exposure = 0.3;
    this.iso = 1;
    this.focalDistance = 1.778;
    this.dofStrength = 1.07;
    this.dofRange = 0.17;
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

scene.add(lines);

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
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

document.querySelector("#focusBtn").addEventListener("click", (e) => {
  focus();
});

function randomize() {
  const palette = getPalette();
  const gradient = new GradientLinear(palette);
  const c = gradient.getAt(Math.random());

  while (group.children.length) {
    const m = group.children[0];
    group.remove(m);
    m.geometry.dispose();
  }

  dofRenderer.clear();
  const lines = renderLines(c);
  dofRenderer.addLines(lines);
  dofRenderer.reset();
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

renderer.autoClear = false;
focus();
randomize();

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
