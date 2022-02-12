import { randomInRange } from "../modules/Maf.js";
import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import {
  CubeCamera,
  DirectionalLight,
  FogExp2,
  GLSL3,
  HemisphereLight,
  InstancedMesh,
  LinearMipmapLinearFilter,
  MeshStandardMaterial,
  Object3D,
  PCFShadowMap,
  Quaternion,
  RawShaderMaterial,
  RGBFormat,
  sRGBEncoding,
  Vector2,
  Vector3,
  WebGLCubeRenderTarget,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";
import { Post } from "./post.js";
import { natural } from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";
// import { capture } from "../modules/capture.js";

const post = new Post(renderer);

const gradient = new GradientLinear(natural);

const BOXES = 1000;
const geo = new RoundedBoxGeometry(1, 1, 1, 0.05, 2);
const mat = new MeshStandardMaterial({ roughness: 0.2, metalness: 0 });
const mesh = new InstancedMesh(geo, mat, BOXES);
scene.add(mesh);
mesh.castShadow = mesh.receiveShadow = true;
const r = 20;
const dummy = new Object3D();
const positions = [];
const nextPositions = [];

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

  dummy.updateMatrix();
  mesh.setMatrixAt(i, dummy.matrix);
  mesh.setColorAt(i, gradient.getAt(Math.random()));
}

const cubeRenderTarget = new WebGLCubeRenderTarget(2048, {
  format: RGBFormat,
  generateMipmaps: true,
  minFilter: LinearMipmapLinearFilter,
});
const cubeCamera = new CubeCamera(0.001, 1000, cubeRenderTarget);
scene.add(cubeCamera);

renderer.shadowMap.enabled = true;
renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.type = PCFShadowMap;

const hemiLight = new HemisphereLight(0xf2d58e, 0xd56529, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xe3c47b, 0.5);
dirLight.position.set(-1, 1.75, 1).multiplyScalar(10);
dirLight.lookAt(scene.position);
scene.add(dirLight);

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

renderer.setClearColor(0xe3c47b, 1);

const controls = getControls();

const fragmentShader = `precision highp float;

in vec2 vUv;

uniform samplerCube map;
uniform float aspectRatio;

out vec4 color;

#define M_PI 3.1415926535897932384626433832795

void main()  {
  float ar = aspectRatio;
  float z = .75;
  // vert
  vec2 uv = ((vUv - .5) * z * vec2(.5 * ar, 1.) )  + .5;
  if(ar>1.) { // horiz
    uv = ((vUv - .5) * z / ar * vec2(.5 * ar, 1.)  ) + .5;
  }
  uv.y = 1. -uv.y;
  float longitude = uv.x * 2. * M_PI - M_PI + M_PI / 2.;
  longitude += M_PI / 2.;
  float latitude = uv.y * M_PI;
  vec3 dir = vec3(
    - sin( longitude ) * sin( latitude ),
    cos( latitude ),
    - cos( longitude ) * sin( latitude )
  );
  normalize( dir );
  color = texture( map, dir );
}`;

const resolution = new Vector2(1, 1);

const shader = new RawShaderMaterial({
  uniforms: {
    map: { value: cubeRenderTarget.texture },
    aspectRatio: { value: 1 },
  },
  vertexShader: orthoVs,
  fragmentShader,
  glslVersion: GLSL3,
});
const shaderPass = new ShaderPass(shader);

const dir = new Vector3();
dir
  .set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, 1))
  .normalize()
  .multiplyScalar(0.01);
const target = new Vector3();

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

function update() {
  for (let i = 0; i < positions.length; i++) {
    positions[i].lerp(nextPositions[i], 0.1);
    dummy.position.copy(positions[i]);
    const d = cubeCamera.position.distanceTo(dummy.position);
    const s = d < 10 ? d / 10 : 1;
    dummy.scale.setScalar(s);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
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

let prevTime = performance.now();
let time = 0;
const q = new Quaternion();
let frames = 0;

function render() {
  const t = performance.now() / 5000;
  if (running) {
    time += t - prevTime;
  }
  prevTime = t;

  if (running) {
    camera.position.x = r * 0.5 * Math.cos(time);
    camera.position.y = r * 0.5 * Math.cos(time * 1.1);
    camera.position.z = r * 0.5 * Math.cos(time * 0.9);

    target.x = r * 0.5 * Math.cos(time * 1.2);
    target.y = r * 0.5 * Math.cos(time * 0.8);
    target.z = r * 0.5 * Math.cos(time * 0.95);
    target.normalize();

    q.set(target.x, target.y, target.z, 1).normalize();

    cubeCamera.quaternion.slerp(q, 0.1);
    cubeCamera.position.copy(camera.position);

    for (let i = 0; i < 10; i++) {
      randomMoveBlock();
    }
    update();
  }

  cubeCamera.update(renderer, scene);
  shaderPass.render(renderer);

  post.render(shaderPass.texture);
  // renderer.render(scene, camera);
  // renderer.render(scene, dirLight.shadow.camera);

  // capture(renderer.domElement);

  // if (frames > 10 * 60 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }
  // frames++;

  renderer.setAnimationLoop(render);
}

const fog = new FogExp2(0xe3c47b, 0.02);
scene.fog = fog;

function myResize(w, h, dpr) {
  shaderPass.setSize(w * dpr, h * dpr);
  shader.uniforms.aspectRatio.value = w / h;
  post.setSize(w, h, dpr);
}
addResize(myResize);

resize();
render();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
