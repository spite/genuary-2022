import {
  Mesh,
  Scene,
  RawShaderMaterial,
  TorusBufferGeometry,
  MeshBasicMaterial,
} from "../third_party/three.module.js";
import { randomInRange } from "../modules/Maf.js";
import { getFBO } from "../modules/fbo.js";

const scene = new Scene();

const radius = 9.5;
const PARALLELS = 10;
const mat = new MeshBasicMaterial({ color: 0x808080 });
const mat2 = new MeshBasicMaterial({ color: 0xffffff });

for (let i = 0; i < PARALLELS; i++) {
  const z = ((i - 0.5 * PARALLELS) / (0.5 * PARALLELS)) * radius;
  const r = Math.sqrt(10 * 10 - z * z);
  const geo = new TorusBufferGeometry(r, 0.01, 3, 100);
  const mesh = new Mesh(geo, mat);
  mesh.position.z = z;
  scene.add(mesh);
}

const MERIDIANS = 10;
const geo = new TorusBufferGeometry(radius, 0.01, 3, 100);
for (let i = 0; i < MERIDIANS; i++) {
  const mesh = new Mesh(geo, mat);
  mesh.rotation.x = Math.PI / 2;
  mesh.rotation.y = (i * Math.PI) / MERIDIANS;
  scene.add(mesh);
}

const lines = [];

function addLines() {
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i];
    scene.remove(m);
    m.geometry.dispose();
  }
  lines.length = 0;

  const RANDOM = 5;
  const d = 5;
  const geo2 = new TorusBufferGeometry(radius, 0.02, 3, 100);
  for (let i = 0; i < RANDOM; i++) {
    const mesh = new Mesh(geo2, mat2);
    mesh.rotation.x = randomInRange(0, 2 * Math.PI);
    mesh.rotation.y = randomInRange(0, 2 * Math.PI);
    mesh.position.set(
      randomInRange(-d, d),
      randomInRange(-d, d),
      randomInRange(-d, d)
    );
    scene.add(mesh);
    lines.push(mesh);
  }
}

addLines();

const fbo = getFBO(1, 1, {}, true);

function update(renderer, camera) {
  renderer.setRenderTarget(fbo);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);
}

function resize(w, h) {
  fbo.setSize(w, h);
}

function randomize() {
  addLines();
}

export { update, resize, randomize, fbo };
