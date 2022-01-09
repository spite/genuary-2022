import {
  scene,
  renderer,
  addUpdate,
  camera,
  getControls,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  group as lines,
  setSize as setLinesSize,
  renderLines,
  group,
  getPalette,
} from "./field.js";
import { GradientLinear } from "../modules/gradient-linear.js";

scene.add(lines);

renderer.setClearColor(0xffffff, 1);
const controls = getControls();

function randomize() {
  const palette = getPalette();
  const gradient = new GradientLinear(palette);
  renderer.setClearColor(gradient.getAt(Math.random()), 1);
  while (group.children.length) {
    const m = group.children[0];
    group.remove(m);
    m.geometry.dispose();
  }

  renderLines();
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

function render() {
  renderer.render(scene, camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h) {
  setLinesSize(w, h);
}
addResize(myResize);

randomize();
resize();
render();
