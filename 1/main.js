import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import { pointsOnSphere } from "../modules/Fibonacci.js";
import {
  IcosahedronBufferGeometry,
  InstancedMesh,
  DynamicDrawUsage,
  Object3D,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  HemisphereLight,
  DirectionalLight,
  Matrix4,
  Vector3,
  Quaternion,
} from "../third_party/three.module.js";
import { mod, parabola, TAU } from "../modules/Maf.js";
import { Easings } from "../modules/easings.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { dragon } from "../modules/palettes.js";
import { Post } from "./post.js";
import { perlin3 } from "../third_party/perlin.js";

const controls = getControls();
const post = new Post(renderer);

renderer.setClearColor(dragon[0]);

let gradient = new GradientLinear(dragon);

camera.position.set(-6, 3, 1).multiplyScalar(1);
camera.lookAt(scene.position);

renderer.shadowMap.enabled = true;
// renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.type = PCFSoftShadowMap;

const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xffffff, 0.5);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(-1, 1.75, 1);
dirLight.position.multiplyScalar(30);
scene.add(dirLight);

dirLight.castShadow = true;

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const d = 5;

dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;

dirLight.shadow.camera.far = 3500;

const POINTS = 10000;
const points = pointsOnSphere(POINTS);

const material = new MeshStandardMaterial({ roughness: 0.5, metalness: 0 });
const geo = new IcosahedronBufferGeometry(0.01, 1);
const mesh = new InstancedMesh(geo, material, POINTS);
mesh.instanceMatrix.setUsage(DynamicDrawUsage);
mesh.castShadow = mesh.receiveShadow = true;
scene.add(mesh);

const dummy = new Object3D();
const m = new Matrix4();
const m2 = new Matrix4();
const up = new Vector3(0, 1, 0);
const q = new Quaternion();

function update(time) {
  const t = time / 2;
  const freq = 5 + 3 * Math.sin(time / 5);
  for (let i = 0; i < POINTS; i++) {
    const p = points[i];
    const a = Math.atan2(p.x, p.z);
    const b = Math.atan2(p.y, p.x);
    const v = mod((freq * i) / POINTS + t + (1 * a) / TAU + (1 * b) / TAU, 1);
    const s = parabola(v, 1);
    const f = 1 + 1 * Easings.OutQuad(s);

    m2.makeRotationY((Easings.InOutQuad(v) * Math.PI) / 4);
    m.lookAt(p, scene.position, up);
    m.multiply(m2);
    q.setFromRotationMatrix(m);

    dummy.position.copy(p).multiplyScalar(f);
    dummy.quaternion.copy(q);
    dummy.scale.set(5, 5, 10).multiplyScalar(s);

    dummy.updateMatrix();

    mesh.setMatrixAt(i, dummy.matrix);

    const ns = 3;
    const n = 0.5 * perlin3(ns * p.x, ns * p.y, ns * p.z);
    const c = gradient.getAt(mod(v + n, 1));
    mesh.setColorAt(i, c);
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.instanceColor.needsUpdate = true;
}

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

function render() {
  const time = performance.now() / 1000;
  if (running) {
    update(time);
  }
  post.render(scene, camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h) {
  post.setSize(w, h);
}
addResize(myResize);

resize();
render();
