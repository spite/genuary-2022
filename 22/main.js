import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import { randomInRange, TAU } from "../modules/Maf.js";
import { MeshLine, MeshLineMaterial } from "../modules/MeshLine.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import {
  Vector2,
  Mesh,
  Group,
  Matrix4,
  Vector3,
} from "../third_party/three.module.js";

const controls = getControls();
const palette = [
  "#0C0719",
  "#FADAD9",
  "#E1A5AD",
  "#281B58",
  "#542F52",
  "#DE5759",
  "#7C6297",
  "#B43944",
];
const gradient = new GradientLinear(palette);
const resolution = new Vector2();
const group = new Group();

const N = 2 * 240;

function prepareMesh(w, c) {
  var g = new MeshLine();

  const material = new MeshLineMaterial({
    color: gradient.getAt(c),
    resolution: resolution,
    sizeAttenuation: true,
    lineWidth: w,
    near: camera.near,
    far: camera.far,
    alphaTest: 0.75 * 0.5,
    depthWrite: true,
    depthTest: true,
    transparent: true,
    opacity: 1,
    dashOffset: 0,
  });

  var mesh = new Mesh(g, material);
  return mesh;
}

const LINES = 7;

const meshes = [];
for (let j = 0; j < LINES; j++) {
  const mesh = prepareMesh(0.01 + (0.1 * j) / LINES, j / LINES);
  group.add(mesh);
  const offset = 0;
  const vertices = [];
  const mat = new Matrix4();
  const RSEGS = 80;
  const r1 = 1.5 + (0.5 * j) / LINES;
  const r2 = 0.75 * randomInRange(0.5, 1.5);
  const offAngle = randomInRange(0, 0.125 * TAU);
  for (let i = 0; i < N; i++) {
    const segment = i / RSEGS;
    const ringAngle = (i * TAU) / RSEGS;
    const segAngle = (segment * 2 * TAU) / (N / RSEGS);
    const p = new Vector3(r1 * Math.cos(segAngle), 0, r1 * Math.sin(segAngle));
    const d = new Vector3(
      r2 * Math.cos(ringAngle),
      r2 * Math.sin(ringAngle),
      0
    );
    mat.makeRotationY(-segAngle + offAngle);
    d.applyMatrix4(mat);
    vertices.push(p.clone().add(d));
  }
  vertices.push(vertices[0].clone());
  mesh.geometry.setPoints(vertices);
  mesh.scale.setScalar(5);
  const speed = Math.floor(randomInRange(1, 5));
  meshes.push({ mesh, offset, speed });
}
group.scale.setScalar(0.09);
scene.add(group);

function updateLine(line, value) {
  line.material.uniforms.dashOffset.value = value;
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function update() {
  const date = new Date();

  const milliSeconds = date.getMilliseconds();
  meshes[0].mesh.material.uniforms.dashArray.value.set(
    milliSeconds,
    2000 - milliSeconds
  );
  updateLine(meshes[0].mesh, milliSeconds / 1000);

  const seconds = date.getSeconds() + milliSeconds / 1000;
  meshes[1].mesh.material.uniforms.dashArray.value.set(seconds, 120 - seconds);
  updateLine(meshes[1].mesh, seconds / 60);

  const minutes = date.getMinutes() + seconds / 60;
  meshes[2].mesh.material.uniforms.dashArray.value.set(minutes, 120 - minutes);
  updateLine(meshes[2].mesh, minutes / 60);

  const hours = date.getHours() + minutes / 60;
  meshes[3].mesh.material.uniforms.dashArray.value.set(hours, 48 - hours);
  updateLine(meshes[3].mesh, hours / 24);

  const days = date.getDate() + hours / 24;
  const max = daysInMonth(date.getMonth(), date.getFullYear());
  meshes[4].mesh.material.uniforms.dashArray.value.set(days, 2 * max - days);
  updateLine(meshes[4].mesh, days / max);

  const month = date.getMonth() + days / max;
  meshes[5].mesh.material.uniforms.dashArray.value.set(month, 24 - month);
  updateLine(meshes[5].mesh, month / 12);

  const years = date.getFullYear() + month / 12;
  meshes[6].mesh.material.uniforms.dashArray.value.set(years, 3000 - years);
  updateLine(meshes[6].mesh, years / 3000);
}

renderer.setClearColor(0xffffff, 1);

function render() {
  update();
  renderer.render(scene, camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr) {
  resolution.set(w, h);
}

addResize(myResize);

resize();
render();
