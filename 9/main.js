import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
import {
  Mesh,
  BoxBufferGeometry,
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  RGBEEncoding,
  PCFSoftShadowMap,
  Euler,
  InstancedMesh,
  Object3D,
  Vector3,
  Raycaster,
  Matrix4,
  Color,
  MeshStandardMaterial,
  sRGBEncoding,
  Group,
} from "../third_party/three.module.js";
import { randomInRange, smoothStep } from "../modules/Maf.js";

renderer.shadowMap.enabled = true;
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

const d = 1.5;

dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;

dirLight.shadow.camera.far = 350;

const controls = getControls();

const ssao = new SSAO();
const post = new Post(renderer);

let running = true;

const mat = new MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.5,
  metalness: 0.2,
});
const geo = new BoxBufferGeometry(1, 1, 1);
const cubes = [];

const raycaster = new Raycaster();
const up = new Vector3(0, 1, 0);
const zero = new Vector3(0, 0, 0);
const rot = new Matrix4();

function side() {
  return Math.random() > 0.5 ? 0.5 : -0.5;
}

function addGreebledCube() {
  const d = 0.5;
  const r = 5 * randomInRange(0.1, 0.2);
  const originPos = new Vector3(
    randomInRange(-d, d),
    randomInRange(-d, d),
    randomInRange(-d, d)
  );
  const originScale = new Vector3(r, r, r);
  const originRot = new Euler(
    randomInRange(0, 2 * Math.PI),
    randomInRange(0, 2 * Math.PI),
    randomInRange(0, 2 * Math.PI)
  );
  cubes.push({
    type: 0,
    position: originPos,
    scale: originScale,
    rotation: originRot,
  });
  rot.makeRotationFromEuler(originRot);

  for (let i = 0; i < 400; i++) {
    const axis = Math.floor(Math.random() * 3);
    const gPos = new Vector3();
    const gScale = new Vector3();
    const mainScale = randomInRange(0.05, 0.2);
    const min = 0.01;
    const max = 0.2;
    switch (axis) {
      case 0:
        gPos.set(
          side() * r,
          0.5 * randomInRange(-r, r),
          0.5 * randomInRange(-r, r)
        );
        gScale.set(mainScale, randomInRange(min, max), randomInRange(min, max));
        break;
      case 1:
        gPos.set(
          0.5 * randomInRange(-r, r),
          side() * r,
          0.5 * randomInRange(-r, r)
        );
        gScale.set(randomInRange(min, max), mainScale, randomInRange(min, max));
        break;
      case 2:
        gPos.set(
          0.5 * randomInRange(-r, r),
          0.5 * randomInRange(-r, r),
          side() * r
        );
        gScale.set(randomInRange(min, max), randomInRange(min, max), mainScale);
        break;
    }
    gPos.applyMatrix4(rot);
    const s = 0.1;
    cubes.push({
      type: 1,
      position: gPos.add(originPos),
      rotation: originRot,
      scale: gScale,
    });
  }
}

let mesh;

function update() {
  const dummy = new Object3D();
  const color = new Color();
  for (let i = 0; i < cubes.length; i++) {
    const c = cubes[i];
    dummy.position.copy(c.position);
    dummy.scale.copy(c.scale);
    dummy.rotation.copy(c.rotation);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    const l = smoothStep(0.2, 0.8, randomInRange(0, 1));
    color.setHSL(0.5, 0, 0.1 + l * 0.8);
    if (c.type === 1) {
      if (Math.random() > 0.95) {
        color.set(0xb70000);
      }
      if (Math.random() > 0.95) {
        color.set(0xffffff);
      }
      if (Math.random() > 0.95) {
        color.set(0);
      }
    }
    mesh.setColorAt(i, color);
  }
}

function randomize() {
  cubes.length = 0;
  while (group.children.length) {
    group.remove(group.children[0]);
  }
  for (let i = 0; i < 10; i++) {
    addGreebledCube();
  }
  mesh = new InstancedMesh(geo, mat, cubes.length);
  // mesh.instanceMatrix.setUsage(DynamicDrawUsage);
  mesh.castShadow = mesh.receiveShadow = true;
  group.add(mesh);
  update();
}

const group = new Group();
scene.add(group);

randomize();

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

function render() {
  const dt = 0.001;
  if (running) {
    group.rotation.y += dt;
    group.rotation.x += 1.1 * dt;
  }
  ssao.render(renderer, scene, camera);
  post.source = ssao.output;
  post.render(scene, camera);

  // capture(renderer.domElement);
  // frames++;
  // if (frames > 120) {
  //   frames = 0;
  //   randomize();
  // }

  // renderer.render(scene, camera);
  renderer.setAnimationLoop(render);
}

addResize((w, h, dpr) => {
  ssao.setSize(w * dpr, h * dpr);
  post.setSize(w * dpr, h * dpr);
});

resize();
renderer.setClearColor(0x101010, 1);

render();
