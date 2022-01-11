import {
  scene,
  addResize,
  renderer,
  camera,
  resize,
  getControls,
} from "../modules/renderer.js";

import { Trail } from "./trail.js";
import { Post } from "./post.js";
// import { capture } from "../modules/capture.js";

const controls = getControls();

const post = new Post(renderer, { vignetteBoost: 1.1, vignetteReduction: 1.1 });

renderer.setClearColor(0x101010, 1);

camera.position.set(0, 0, 4);
camera.lookAt(scene.position);

const trails = [];
function addTrail(width) {
  const trail = new Trail(width);
  trails.push(trail);
  scene.add(trail.source);
  scene.add(trail.trailMesh);
}

addTrail(0.2);

let running = true;
let spin = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyS") {
    spin = !spin;
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#spinBtn").addEventListener("click", (e) => {
  spin = !spin;
});

let time = 0;
let prevTime = time;
let w = 0;

function render() {
  const t = performance.now();
  const dt = 16; // t - prevTime;

  if (running) {
    time += dt;
    for (const trail of trails) {
      trail.update(time);
    }
  }
  prevTime = t;
  if (spin) {
    scene.rotation.y += dt / 5000;
  }
  // renderer.render(scene, camera);
  post.render(scene, camera);
  // capture(renderer.domElement);

  // if (time > 22000 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }

  renderer.setAnimationLoop(render);
}

function myResize(w, h) {
  post.setSize(w, h);
  for (const trail of trails) {
    trail.setSize(w, h);
  }
}
addResize(myResize);

resize();
render();

// window.start = () => {
//   time = 0;
//   window.capturer.start();
// };
