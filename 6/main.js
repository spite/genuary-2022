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
import { MeshLine, MeshLineMaterial } from "../modules/Meshline.js";
import { randomInRange, TAU, parabola, map } from "../modules/Maf.js";
// import { palette2 as palette } from "../modules/floriandelooij.js";
// import { gradientLinear } from "../modules/gradient.js";

// palette.range = [
//   "#F62D62",
//   "#FFFFFF",
//   "#FDB600",
//   "#F42D2D",
//   "#544C98",
//   "#ECACBC",
// ];

// const gradient = new gradientLinear(palette.range);

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
    // alphaTest: 0.75 * 0.5,
    // depthWrite: true,
    // depthTest: true,
    // transparent: true,
    // opacity: 0.75,
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
  const points = 1 * Math.round(TAU * radius);
  const mesh = prepareMesh(points, w, color);
  group.add(mesh);
  meshes.push({
    mesh,
    radius,
    radius2,
    offset,
    range,
    loops: Math.round(randomInRange(1, 3)),
  });
}
group.scale.setScalar(0.5);
scene.add(group);

const tmpVector = new Vector3();
const tmpMat = new Matrix4();

const startTime = performance.now();
const loopDuration = 10;

function draw() {
  const time = (0.001 * (performance.now() - startTime)) % loopDuration;
  const t = time / loopDuration;

  group.rotation.y = -t;

  meshes.forEach((m, i) => {
    const positions = m.mesh.geometry.positions;
    const points = positions.length / 3;
    for (let i = 0, ptr = 0; i < points; i++) {
      const a = (m.range * i * TAU) / points + t * TAU + m.offset;
      const x = m.radius * Math.cos(a);
      const y = 0;
      const z = m.radius * Math.sin(a);
      const b = (i * TAU) / points + 4 * t * TAU;
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
}

function render() {
  draw();
  renderer.setAnimationLoop(render);
}

render();
