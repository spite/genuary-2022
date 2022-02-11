import {
  scene,
  renderer,
  addUpdate,
  camera,
  getControls,
} from "../modules/renderer.js";
import {
  Group,
  Color,
  Mesh,
  Vector2,
  Vector3,
  Matrix4,
} from "../third_party/three.module.js";
import { MeshLine, MeshLineMaterial } from "../modules/MeshLine.js";
import { randomInRange, TAU, parabola, map } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

const group = new Group();
const controls = getControls();

camera.position.set(5.8, 5.2, -21);
camera.lookAt(group.position);
renderer.setClearColor(0, 1);

const resolution = new Vector2(window.innerWidth, window.innerHeight);

const meshes = [];

function prepareMesh(points, w, color) {
  var positions = [];
  for (let j = 0; j < points; j++) {
    positions.push(new Vector3(0, 0, 0));
  }

  const g = new MeshLine();
  g.setPoints(positions, (p) => {
    return parabola(p, 1);
  });

  const material = new MeshLineMaterial({
    color,
    resolution: resolution,
    sizeAttenuation: true,
    lineWidth: w,
    near: camera.near,
    far: camera.far,
    borderWidth: 0,
  });

  var mesh = new Mesh(g, material);

  return mesh;
}

const LINES = 7;

for (let i = 0; i < LINES; i++) {
  const w = 0.5;
  const radius = 10;
  const radius2 = map(0, LINES, 1, 5, i);
  const color = new Color();
  color.setHSL(i / LINES, 1, 0.5);
  const offset = (1 * i) / LINES;
  const range = 0.25;
  const points = 200;
  const mesh = prepareMesh(points, w, color);
  group.add(mesh);
  meshes.push({
    mesh,
    radius,
    toRadius: radius,
    radius2,
    toRadius2: radius2,
    offset,
    toOffset: offset,
    range,
    toRange: range,
  });
}
group.scale.setScalar(0.5);
scene.add(group);

const tmpVector = new Vector3();
const tmpMat = new Matrix4();

let running = true;
let loops = 1;
let t = 0;

let prevTime = performance.now();

function draw() {
  const time = performance.now();
  const dt = time - prevTime;
  if (running) {
    t += dt / 4000;
  }
  prevTime = time;

  group.rotation.y = -t;

  const e = 0.05;

  meshes.forEach((m, i) => {
    const positions = m.mesh.geometry.positions;
    const points = positions.length / 3;
    m.range += (m.toRange - m.range) * e;
    m.radius += (m.toRadius - m.radius) * e;
    m.radius2 += (m.toRadius2 - m.radius2) * e;
    m.offset += (m.toOffset - m.offset) * e;

    for (let i = 0, ptr = 0; i < points; i++) {
      const a = (m.range * i * TAU) / points + t * TAU + m.offset;
      const x = m.radius * Math.cos(a);
      const y = 0;
      const z = m.radius * Math.sin(a);
      const b = (loops * (i * TAU)) / points + 4 * t * TAU;
      const r = m.radius2;
      tmpVector.set(r * Math.cos(b), r * Math.sin(b), 0);
      tmpMat.makeRotationY(-a);
      tmpVector.applyMatrix4(tmpMat);
      positions[ptr + 0] = x + tmpVector.x;
      positions[ptr + 1] = y + tmpVector.y;
      positions[ptr + 2] = z + tmpVector.z;
      ptr += 3;
    }
    m.mesh.geometry.process();
  });

  renderer.render(scene, camera);
  // capture(renderer.domElement);

  // if (t > 1 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }
}

function randomize() {
  loops = Math.round(randomInRange(1, 3));
  const radius = randomInRange(8, 12);
  let i = 0;
  const r = randomInRange(0.1, 0.75);
  const oScale = randomInRange(0.1, 1.9);
  const LINES = meshes.length;
  const minR = randomInRange(0, 4);
  const maxR = randomInRange(4, 8);

  for (const m of meshes) {
    m.toRadius = radius;
    m.toRadius2 = map(0, LINES, minR, maxR, i);
    m.toRange = r;
    const offset = (1 * i) / LINES;
    m.toOffset = oScale * offset;
    i++;
  }
}

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

function render() {
  draw();
  renderer.setAnimationLoop(render);
}

render();

// window.start = () => {
//   t = 0;
//   window.capturer.start();
// };
