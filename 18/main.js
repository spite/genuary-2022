import {
  scene,
  getControls,
  addResize,
  resize,
  renderer,
  camera,
} from "../modules/renderer.js";
import {
  BackSide,
  FogExp2,
  PCFSoftShadowMap,
  DynamicDrawUsage,
  IcosahedronBufferGeometry,
  InstancedMesh,
  DirectionalLight,
  AmbientLight,
  HemisphereLight,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  MeshStandardMaterial,
  Object3D,
  Quaternion,
  TextureLoader,
  TorusKnotBufferGeometry,
  Vector3,
  PCFShadowMap,
} from "../third_party/three.module.js";
import { VHS } from "./vhs.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";
import { TAU, parabola, mod, VERSION } from "../modules/Maf.js";
import { getLemniscatePoint } from "../modules/lemniscate.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { Post } from "./post.js";
import { Curves } from "../third_party/CurveExtras.js";

const controls = getControls();

const vhs = new VHS(renderer);
const post = new Post(renderer);

const palettes = [
  ["#D82C06", "#FFCF3C", "#F45B0B", "#F49A4A"],
  ["#fcca35", "#ff5c20", "#fb1c29", "#bc1e3f", "#6c2044"],
  // ["#6c2044", "#1d8e36", "#4191aa"],
  ["#fff9b4", "#ee301d", "#982782", "#1766b1"],
];
let gradient = new GradientLinear(palettes[0]);

const directionalLight = new DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(-2, 2, 2);
directionalLight.castShadow = true;
directionalLight.shadow.camera.near = -1;
directionalLight.shadow.camera.far = 10;
scene.add(directionalLight);

const directionalLight2 = new DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(1, 2, 1);
directionalLight2.castShadow = true;
directionalLight2.shadow.camera.near = -4;
directionalLight2.shadow.camera.far = 10;
scene.add(directionalLight2);

const ambientLight = new AmbientLight(0x808080, 0.5);
scene.add(ambientLight);

const light = new HemisphereLight(0, 1, 0.5);
scene.add(light);

const OBJECTS = 300;

const geo = new RoundedBoxGeometry(0.25, 0.25, 0.05, 0.01, 4);
const object = new InstancedMesh(geo, new MeshStandardMaterial(), OBJECTS);
object.instanceMatrix.setUsage(DynamicDrawUsage);
object.castShadow = object.receiveShadow = true;
scene.add(object);

const dummy = new Object3D();
const tmp = new Vector3();
const m = new Matrix4();
const up = new Vector3(0, 0, 1);
const mRot = new Matrix4();
const q = new Quaternion();

function trefoilFn() {
  const curve = new Curves.TrefoilKnot();
  return (a) => {
    return curve.getPointAt(mod(a / TAU, 1)).multiplyScalar(0.025);
  };
}

function knotFn() {
  const curve = new Curves.KnotCurve();
  return (a) => {
    const p = curve.getPointAt(mod(a / TAU, 1)).multiplyScalar(0.0125);
    const tmp = p.x;
    p.x = p.z;
    p.z = tmp;
    return p;
  };
}

function torusKnotFn() {
  const curve = new Curves.TorusKnot();
  return (a) => {
    return curve.getPointAt(mod(a / TAU, 1)).multiplyScalar(0.025);
  };
}

function cinquefoilFn() {
  const curve = new Curves.CinquefoilKnot();
  return (a) => {
    return curve.getPointAt(mod(a / TAU, 1)).multiplyScalar(0.025);
  };
}

function leminscateFn() {
  return (a) => {
    const p = getLemniscatePoint(a);
    const z = 0.25 * Math.sin(a);
    return new Vector3(p.x, p.y, z);
  };
}

const fns = [
  trefoilFn(),
  knotFn(),
  torusKnotFn(),
  leminscateFn(),
  cinquefoilFn(),
];

let fn = fns[3];

function getPalette() {
  const src = palettes[Math.floor(Math.random() * palettes.length)];
  const gradient = new GradientLinear(src);
  const colors = [];
  for (let i = 0; i < 4; i++) {
    colors.push(gradient.getAt(Math.random()));
  }
  light.color.setHex(src[1]);
  light.groundColor.setHex(src[2]);

  return new GradientLinear(colors);
}

let invalidate = false;

function randomize() {
  gradient = getPalette();
  fn = fns[Math.floor(Math.random() * fns.length)];
  invalidate = true;
}

function updateObject(t) {
  for (let ptr = 0; ptr < OBJECTS; ptr++) {
    const a = (ptr * (1 * TAU)) / OBJECTS + t * TAU;
    const p = fn(a);
    const r = 0.25;

    dummy.position.x = p.x;
    dummy.position.y = p.y;
    dummy.position.z = p.z;

    tmp.set(p.x, p.y, p.z);
    const b = mod(a + TAU / OBJECTS, TAU);
    const pp = fn(b);
    m.lookAt(tmp, new Vector3(pp.x, pp.y, pp.z), up);
    mRot.makeRotationZ((ptr * TAU) / OBJECTS + t * 4 * TAU);
    m.multiply(mRot);
    q.setFromRotationMatrix(m);

    dummy.quaternion.copy(q);

    const s = 1; //parabola(mod(ptr / OBJECTS, 1), 0.1);
    dummy.scale.setScalar(s);

    dummy.updateMatrix();
    object.setMatrixAt(ptr, dummy.matrix);

    const c = gradient.getAt(parabola(ptr / OBJECTS, 1));

    object.setColorAt(ptr, c);
  }
  object.instanceMatrix.needsUpdate = true;
  object.instanceColor.needsUpdate = true;
}

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

let time = 0;
let prevTime = performance.now();

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    time += dt / 10000;
    object.rotation.y += 0.01;
    invalidate = true;
  }
  if (invalidate) {
    updateObject(time);
    invalidate = false;
  }
  vhs.paused = !running;
  vhs.render(scene, camera);
  post.render(vhs.texture);
  renderer.setAnimationLoop(render);
}

renderer.setClearColor(0x776e88, 1);
scene.fog = new FogExp2(0x776e88, 0.1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFShadowMap;

function myResize(w, h, dpr) {
  vhs.setSize(w * dpr, h * dpr);
  post.setSize(w, h, dpr);
}
addResize(myResize);

resize();
render();
