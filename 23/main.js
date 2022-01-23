import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import { Poisson3D } from "../modules/poisson.js";
import { randomInRange, map } from "../modules/Maf.js";
import {
  BufferGeometry,
  BufferAttribute,
  Vector3,
  Vector2,
} from "../third_party/three.module.js";
import { init as initParticles } from "../modules/particles.js";
import { Venation } from "./venation.js";
import { curl, generateNoiseFunction } from "../modules/curl.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { Easings } from "../modules/easings.js";
import { Post } from "./post.js";

const post = new Post(renderer);

// setup(animate);

const WIDTH = 2;
const HEIGHT = 2;
const DEPTH = 2;

function getPoissonVolume() {
  console.log("Poisson");
  const poisson = new Poisson3D(WIDTH, HEIGHT, DEPTH, 0.1);
  const points = poisson.calculate();
  for (const p of points) {
    p.x -= 0.5 * WIDTH;
    p.y -= 0.5 * HEIGHT;
    p.z -= 0.5 * DEPTH;
  }
  return points;
}

function getRandomVolume() {
  console.log("Random");
  const points = [];
  for (let i = 0; i < 6000; i++) {
    const pt = new Vector3(
      randomInRange(-0.5 * WIDTH, 0.5 * WIDTH),
      randomInRange(-0.5 * HEIGHT, 0.5 * HEIGHT),
      randomInRange(-0.5 * DEPTH, 0.5 * DEPTH)
    );
    points.push(pt);
  }
  return points;
}

function getVolume() {
  let src;
  if (Math.random() > 0.5) {
    src = getPoissonVolume();
  } else {
    src = getRandomVolume();
  }
  // const src = getRandomVolume();

  const points = [];
  for (const pt of src) {
    if (pt.length() < 0.5 * WIDTH) {
      points.push(pt);
    }
  }

  const fn = generateNoiseFunction();

  const s = randomInRange(0.1, 0.2);
  for (const p of points) {
    for (let i = 0; i < 10; i++) {
      const dir = curl(p, fn);
      p.add(dir.normalize().multiplyScalar(s));
    }
  }
  return points;
}

let points;
let venation;
let particles;
let leaves;

function addSeeds() {
  // venation.addSeed(new Vector3(0, -1, 0));
  const seeds = Math.floor(randomInRange(1, 4));
  for (let j = 0; j < seeds; j++) {
    // venation.addSeed(
    //   new Vector3(
    //     randomInRange(-0.5 * WIDTH, 0.5 * WIDTH),
    //     randomInRange(-0.5 * HEIGHT, 0.5 * HEIGHT),
    //     randomInRange(-0.5 * DEPTH, 0.5 * DEPTH)
    //   )
    // );
    venation.addSeed(points[~~(Math.random() * points.length)].clone());
  }
}

// venation.addSeed(new Vector2(512, 512));

// canvas.addEventListener("click", (e) => {
//   venation.addSeed(new Vector3(e.pageX, e.pageY, 0));
// });

const gl = renderer.getContext();
gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);

const radius = 0.1;

const bark = ["#7a6935", "#694b37", "#5f6344", "#a5633c", "#dfd8c9"];
const bark2 = ["#69472a", "#7a5231", "#94633b", "#9a6f43", "#a77e4a"];
const bark3 = ["#a0938c", "#695a54", "#726550", "#3d2f20", "#2c2015"];
const barkPalettes = [bark, bark2, bark3];
const green = ["#087830", "#059033", "#90EE90", "#6F9940"];
const green2 = ["#396307", "#8fa213", "#dac627", "#c0db69", "#cff5c6"];
const autumn = ["#66221e", "#c12d22", "#f58364", "#f5bc60", "#f4eba3"];
const leafPalettes = [green, green2, autumn];
let leafGradient;
let barkGradient;

function draw() {
  const positions = particles.geometry.attributes.position.array;
  const colors = particles.geometry.attributes.color.array;
  const size = particles.geometry.attributes.size.array;
  let i = 0;
  let maxThickness = 0;
  for (let p of venation.nodes) {
    maxThickness = Math.max(p.thickness, maxThickness);
  }
  for (let j = 0; j < positions.length; j += 3) {
    size[i] = 0;
    i++;
  }
  i = 0;
  for (const point of venation.nodes) {
    positions[i] = point.position.x;
    positions[i + 1] = point.position.y;
    positions[i + 2] = point.position.z;
    if (colors[i] === -1) {
      const c = barkGradient.getAt(Math.random());
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
    }
    size[i / 3] =
      0.05 +
      0.5 * Easings.OutQuint(map(0, maxThickness, 0, 1, point.thickness));
    i += 3;
  }

  particles.geometry.attributes.position.needsUpdate = true;
  particles.geometry.attributes.color.needsUpdate = true;
  particles.geometry.attributes.size.needsUpdate = true;
}

function drawLeaves() {
  const positions = leaves.geometry.attributes.position.array;
  const colors = leaves.geometry.attributes.color.array;
  const size = leaves.geometry.attributes.size.array;
  let i = 0;

  for (const point of venation.leaves) {
    positions[i] = point.position.x;
    positions[i + 1] = point.position.y;
    positions[i + 2] = point.position.z;
    const l = map(0.1 * radius, 2 * radius, 0.1, 1, point.radius);

    const s = randomInRange(0.1, 0.3);
    if (size[i / 3] === -1) {
      size[i / 3] = s;
    }
    if (colors[i] === -1) {
      const c = leafGradient.getAt(1 - map(0.1, 0.3, 0, 1, s));
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
      if (Math.random() > 0.95) {
        colors[i] = 0xb7 / 255;
        colors[i + 1] = 0;
        colors[i + 2] = 0;
        size[i / 3] /= 2;
      }
    }
    i += 3;
  }

  leaves.geometry.attributes.position.needsUpdate = true;
  leaves.geometry.attributes.color.needsUpdate = true;
  leaves.geometry.attributes.size.needsUpdate = true;
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

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

particles = initParticles(200000, 2);
particles.frustumCulled = false;
scene.add(particles);

function randomize() {
  running = true;

  leafGradient = new GradientLinear(
    leafPalettes[Math.floor(Math.random() * leafPalettes.length)]
  );
  barkGradient = new GradientLinear(
    barkPalettes[Math.floor(Math.random() * barkPalettes.length)]
  );

  points = getVolume();

  const pPos = particles.geometry.attributes.position.array;
  const pColor = particles.geometry.attributes.color.array;
  const pSize = particles.geometry.attributes.size.array;
  for (let i = 0; i < pColor.length; i++) {
    pColor[i] = -1;
    pSize[i] = -1;
  }
  for (let i = 0; i < pPos.length; i++) {
    pPos[i] = 100000;
  }

  if (leaves) {
    scene.remove(leaves);
    leaves.geometry.dispose();
  }
  leaves = initParticles(points.length, 4);
  leaves.frustumCulled = false;
  scene.add(leaves);

  const colors = leaves.geometry.attributes.color.array;
  const size = leaves.geometry.attributes.size.array;
  for (let i = 0; i < colors.length; i++) {
    colors[i] = -1;
    size[i] = -1;
  }

  venation = new Venation(points);

  venation.closestDistance = randomInRange(0.2, 2);
  venation.minDistance = randomInRange(0.005, 0.05);
  venation.starvedProbability = randomInRange(0, 0.5);
  addSeeds();
}

const resolution = new Vector2();

const controls = getControls();

let processed = false;

function render() {
  if (venation && running) {
    if (venation.activeNodes.length) {
      for (let i = 0; i < 1; i++) {
        venation.step();
      }
      draw();
      drawLeaves();
    }
  }
  post.render(scene, camera);
  renderer.setAnimationLoop(render);
}

renderer.setClearColor(0xffffff, 1);

function myResize(w, h, dPR) {
  post.setSize(w * dPR, h * dPR);
}
addResize(myResize);

resize();

render();
randomize();
