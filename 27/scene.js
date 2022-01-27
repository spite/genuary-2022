import { randomInRange, PI } from "../modules/Maf.js";
import {
  CubeCamera,
  DirectionalLight,
  FogExp2,
  GLSL3,
  HemisphereLight,
  IcosahedronBufferGeometry,
  InstancedMesh,
  LinearMipmapLinearFilter,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PCFShadowMap,
  PointLight,
  Quaternion,
  RawShaderMaterial,
  RGBFormat,
  SpotLight,
  sRGBEncoding,
  Vector2,
  Vector3,
} from "../third_party/three.module.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";
import { natural } from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { scene, renderer, camera, getControls } from "../modules/renderer.js";

const gradient = new GradientLinear(natural);

scene.scale.set(0.5, 0.5, 0.5);

const BOXES = 1000;
const geo = new RoundedBoxGeometry(1, 1, 1, 0.05, 2);
// const geo = new IcosahedronBufferGeometry(0.5, 5);
const mat = new MeshStandardMaterial({ roughness: 0.5, metalness: 0 });
const mesh = new InstancedMesh(geo, mat, BOXES);
scene.add(mesh);
mesh.castShadow = mesh.receiveShadow = true;
const r = 20;
const dummy = new Object3D();
const positions = [];
const nextPositions = [];
const rotations = [];
const nextRotations = [];
for (let i = 0; i < BOXES; i++) {
  dummy.position.set(
    randomInRange(-r, r),
    randomInRange(-r, r),
    randomInRange(-r, r)
  );
  dummy.position.x = Math.round(dummy.position.x);
  dummy.position.y = Math.round(dummy.position.y);
  dummy.position.z = Math.round(dummy.position.z);
  positions[i] = dummy.position.clone();
  nextPositions[i] = dummy.position.clone();
  rotations[i] = new Vector3();
  nextRotations[i] = new Vector3();

  dummy.updateMatrix();
  mesh.setMatrixAt(i, dummy.matrix);
  mesh.setColorAt(i, gradient.getAt(Math.random()));
}

renderer.shadowMap.enabled = true;
renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.type = PCFShadowMap;

const hemiLight = new HemisphereLight(0x808080, 0x202020, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xffffff, 0.5);
dirLight.position.set(-1, 1.75, 1).multiplyScalar(10);
dirLight.lookAt(scene.position);
// scene.add(dirLight);

dirLight.castShadow = true;

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const d = 35;

dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;

dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 100;

const pointLight = new PointLight(0xffffff, 1, 10, 0.1);
scene.add(pointLight);

const p = new Vector3();

function checkCollision(nextPos) {
  for (let i = 0; i < nextPositions.length; i++) {
    const p = nextPositions[i];
    if (nextPos.x === p.x && nextPos.y === p.y && nextPos.z === p.z) {
      return true;
    }
  }
  return false;
}

const tmp = new Vector3();
function randomMoveBlock() {
  const i = Math.floor(randomInRange(0, positions.length));
  let dx = 0;
  let dy = 0;
  let dz = 0;
  const r = randomInRange(0, 1);
  if (r < 1 / 3) {
    dx = randomInRange(0, 1) > 0.5 ? -1 : 1;
  } else if (r < 2 / 3) {
    dy = randomInRange(0, 1) > 0.5 ? -1 : 1;
  } else {
    dz = randomInRange(0, 1) > 0.5 ? -1 : 1;
  }
  tmp.set(
    Math.round(positions[i].x + dx),
    Math.round(positions[i].y + dy),
    Math.round(positions[i].z + dz)
  );
  if (!checkCollision(tmp)) {
    nextPositions[i].copy(tmp);
  }
}

const HPI = PI / 2;
function round90Deg(v) {
  return Math.floor(v / HPI) * HPI;
}

function randomRotateBlock() {
  const i = Math.floor(randomInRange(0, positions.length));
  let dx = 0;
  let dy = 0;
  let dz = 0;
  const r = randomInRange(0, 1);
  if (r < 1 / 3) {
    dx = randomInRange(0, 1) > 0.5 ? -1 : 1;
  } else if (r < 2 / 3) {
    dy = randomInRange(0, 1) > 0.5 ? -1 : 1;
  } else {
    dz = randomInRange(0, 1) > 0.5 ? -1 : 1;
  }
  tmp.set(
    round90Deg(rotations[i].x + (dx * Math.PI) / 2),
    round90Deg(rotations[i].y + (dy * Math.PI) / 2),
    round90Deg(rotations[i].z + (dz * Math.PI) / 2)
  );
  nextRotations[i].copy(tmp);
}

function update() {
  for (let i = 0; i < 10; i++) {
    randomMoveBlock();
    randomRotateBlock();
  }

  for (let i = 0; i < positions.length; i++) {
    positions[i].lerp(nextPositions[i], 0.052);
    rotations[i].lerp(nextRotations[i], 0.05);
    dummy.position.copy(positions[i]);
    dummy.rotation.set(rotations[i].x, rotations[i].y, rotations[i].z);
    const d = camera.position.distanceTo(dummy.position);
    const s = d < 10 ? d / 10 : 1;

    dummy.scale.setScalar(s);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
}

const controls = getControls();

export { scene, renderer, camera, update, pointLight };
