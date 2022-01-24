import {
  scene,
  getControls,
  renderer,
  addUpdate,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import { PoissonSphere3D } from "../modules/poisson.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";
import {
  BoxBufferGeometry,
  InstancedMesh,
  Matrix4,
  Group,
  Object3D,
  Vector3,
  PCFSoftShadowMap,
  DirectionalLight,
  AmbientLight,
  sRGBEncoding,
  HemisphereLight,
  MeshStandardMaterial,
  IcosahedronBufferGeometry,
  DynamicDrawUsage,
  Mesh,
} from "../third_party/three.module.js";

import { TAU } from "../modules/Maf.js";
import { GLTFLoader } from "../third_party/GLTFLoader.js";
import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";

const ssao = new SSAO();
const post = new Post(renderer);

const controls = getControls();

const rnd1 = (() => {
  let seed = 1231312;
  const a = 1103515245;
  const c = 12345;
  const m = 2 ** 31;
  return () => {
    seed = (a * seed + c) % m;
    return seed / m;
  };
})();

const rnd2 = (() => {
  let seed = 3459173429;
  return () => {
    seed = 910230123 + seed;
    return (seed % 10000) / 10000;
  };
})();

function randomInRange(a, b) {
  return a + rnd2() * (b - a);
}

const buckets = [];
const numBuckets = 100;

for (let i = 0; i < numBuckets; i++) {
  buckets[i] = { accum: 0, count: 0, res: 0 };
}

let mean = 0;
let total = 0;
const values = [];

function process(v) {
  values.push(v);
  mean += v;
  total++;
  const b = Math.floor(v * 100);
  const bucket = buckets[b];
  bucket.accum += v;
  bucket.count++;
}

for (let i = 0; i < 10000; i++) {
  process(rnd1());
}

mean = mean / total;

let variance = 0;
for (let i = 0; i < values.length; i++) {
  variance += (mean - values[i]) ** 2;
}
variance /= total;

for (let i = 0; i < numBuckets; i++) {
  buckets[i].res = buckets[i].accum / buckets[i].count;
}

console.log(mean, variance, buckets);

const poisson = new PoissonSphere3D(50, 50, 50, 2.5);
const points = poisson.calculate();

const particles = [];
for (const pt of points) {
  const size = 0.025 * randomInRange(0.5, 1.2);
  const rotx = Math.round(randomInRange(0, 10));
  const roty = Math.round(randomInRange(0, 10));
  particles.push({
    position: pt,
    baseRot: randomInRange(0, TAU),
    size,
    rotx,
    toRotx: rotx,
    roty,
    toRoty: roty,
    randDir: new Vector3(
      randomInRange(-1, 1),
      randomInRange(-1, 1),
      randomInRange(-1, 1)
    ),
    randVal: randomInRange(-0.2, 0.2),
  });
}

function relax() {
  const dir = new Vector3();
  const force = new Vector3();
  for (let i = 0; i < particles.length; i++) {
    const a = particles[i];
    const l = a.position.length();
    force.set(0, 0, 0);
    for (let j = 0; j < particles.length; j++) {
      const b = particles[j];
      if (i !== j) {
        dir.copy(a.position).sub(b.position);
        const l = dir.lengthSq();
        const d = (a.size + b.size) * 60;
        if (l < d ** 2) {
          force.add(dir.normalize().multiplyScalar(0.1));
        }
      }
    }
    a.position.add(force);
    a.position.setLength(l);
  }
}

for (let i = 0; i < 100; i++) {
  relax();
}

let mesh;
let mesh2;
const group = new Group();
scene.add(group);

function generate(geo) {
  const material = new MeshStandardMaterial({
    color: 0xf2e9d4,
    roughness: 0.2,
    metalness: 0,
  });
  mesh = new InstancedMesh(geo, material, particles.length);
  mesh.instanceMatrix.setUsage(DynamicDrawUsage);
  mesh.castShadow = mesh.receiveShadow = true;
  group.add(mesh);

  const material2 = new MeshStandardMaterial({
    color: 0x000000,
    roughness: 0.6,
    metalness: 0,
  });
  mesh2 = new InstancedMesh(
    new BoxBufferGeometry(0.9, 0.9, 0.9),
    material2,
    particles.length
  );
  mesh2.castShadow = mesh2.receiveShadow = true;
  mesh2.instanceMatrix.setUsage(DynamicDrawUsage);
  group.add(mesh2);
}

function update() {
  const dummy = new Object3D();
  const dir = new Vector3();
  const rot = new Matrix4();
  const x = new Vector3(1, 0, 0);
  const y = new Vector3(0, 1, 0);

  const prob = 0.99;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    if (randomInRange(0, 1) > prob) {
      p.toRotx++;
    }
    if (randomInRange(0, 1) > prob) {
      p.toRoty++;
    }

    p.rotx += (p.toRotx - p.rotx) * 0.1;
    p.roty += (p.toRoty - p.roty) * 0.1;

    const s = p.size;
    dir.copy(p).normalize();
    dir.set(0, 0, 1);
    dummy.position
      .copy(p.position)
      .multiplyScalar(0.01)
      .add(dir.clone().multiplyScalar(s / 2));
    dummy.scale.setScalar(s);
    dummy.lookAt(scene.position);
    dummy.updateMatrix();
    rot.makeRotationAxis(dir, p.baseRot);
    dummy.matrix.multiply(rot);
    rot.makeRotationAxis(x, (Math.PI / 2) * p.rotx);
    dummy.matrix.multiply(rot);
    rot.makeRotationAxis(y, (Math.PI / 2) * p.roty);
    dummy.matrix.multiply(rot);
    rot.makeRotationAxis(p.randDir, p.randVal);
    dummy.matrix.multiply(rot);
    mesh.setMatrixAt(i, dummy.matrix);
    mesh2.setMatrixAt(i, dummy.matrix);
    mesh.setMatrixAt(i, dummy.matrix);
    mesh2.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh2.instanceMatrix.needsUpdate = true;
}

function render() {
  if (running) {
    group.rotation.y += 0.001;
    group.rotation.x += 0.0001;
    update();
  }
  ssao.render(renderer, scene, camera);
  post.render(ssao.output);
  renderer.setAnimationLoop(render);
}

async function load() {
  const loader = new GLTFLoader();
  return await new Promise((resolve, reject) => {
    loader.load("dice01.glb", (e) => {
      const geo = e.scene.children[0].children[0].geometry;
      geo.scale(0.02, 0.02, 0.02);
      geo.center();
      resolve(geo);
    });
  });
}

function randomize() {
  for (const p of particles) {
    const rotx = Math.round(randomInRange(0, 10));
    const roty = Math.round(randomInRange(0, 10));
    p.toRotx = rotx;
    p.toRoty = roty;
  }
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

renderer.shadowMap.enabled = true;
renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.type = PCFSoftShadowMap;

const hemiLight = new HemisphereLight(0xe7e9ed, 0x7d828e, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xe0e2e6, 0.5);
dirLight.position.set(-1, 1.75, 1);
scene.add(dirLight);

dirLight.castShadow = true;

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

camera.position.set(
  -0.4546147168242088,
  0.34982308172165183,
  0.5576282549706502
);
camera.lookAt(scene.position);

const d = 0.3;

dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;

dirLight.shadow.camera.near = 1;
dirLight.shadow.camera.far = 4;

renderer.setClearColor(0x101010, 1);

async function init() {
  const geo = await load();
  generate(geo);
  update();
  render();
}

function myResize(w, h, dPR) {
  ssao.setSize(w, h, dPR);
  post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();
