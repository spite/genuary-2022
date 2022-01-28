import {
  scene,
  getControls,
  renderer,
  addUpdate,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import { Gum } from "./gum.js";
import { FaceMeshFaceGeometry } from "./face.js";
import {
  MeshNormalMaterial,
  Mesh,
  Object3D,
  InstancedMesh,
  OrthographicCamera,
  MeshDepthMaterial,
  LinearFilter,
  VideoTexture,
  Scene,
  RawShaderMaterial,
  GLSL3,
  RGBAFormat,
  UnsignedByteType,
} from "../third_party/three.module.js";
import { getFBO } from "../modules/fbo.js";
import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
import { brick, box, capsule } from "./geometries.js";
import { randomInRange } from "../modules/Maf.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { ShaderTexture } from "../modules/ShaderTexture.js";

camera.near = 0.0001;
camera.far = 10;
camera.updateProjectionMatrix();

camera.position.set(0.1, 0.1, -1);
camera.lookAt(scene.position);

const ssao = new SSAO();
const post = new Post(renderer);

const gum = new Gum(
  document.querySelector("#device"),
  document.querySelector("#nextDeviceBtn")
);

const faceGeometry = new FaceMeshFaceGeometry({ useVideoTexture: true });
const faceCamera = new OrthographicCamera(1, 1, 1, 1, -50, 50);

const faceScene = new Scene();
const material = new MeshDepthMaterial();
const mask = new Mesh(faceGeometry, material);
faceScene.add(mask);

const height = getFBO(
  1,
  1,
  { minFilter: LinearFilter, magFilter: LinearFilter },
  true
);

let model;
let mesh;

const controls = getControls();

const color = new VideoTexture(gum.video);

const copyFs = `precision highp float;

in vec2 vUv;

uniform sampler2D map;

out vec4 color;

void main() {
  color = texture(map, vUv);
}`;

const copyShader = new RawShaderMaterial({
  uniforms: { map: { value: color } },
  vertexShader: orthoVs,
  fragmentShader: copyFs,
  glslVersion: GLSL3,
});

const copyPass = new ShaderPass(copyShader);

const noiseFs = `precision highp float;

in vec2 vUv;

uniform float time;

out vec4 color;

${noise3d}

void main() {
  color = vec4(.5 + .5 * snoise(vec3(vUv * 10., time)));
}`;

const noiseShader = new RawShaderMaterial({
  uniforms: { time: { value: 0 } },
  vertexShader: orthoVs,
  fragmentShader: noiseFs,
  glslVersion: GLSL3,
});

const noiseTexture = new ShaderTexture(
  renderer,
  noiseShader,
  1,
  1,
  RGBAFormat,
  UnsignedByteType,
  LinearFilter,
  LinearFilter
);

ssao.colorMap = color; // copyPass.texture;
ssao.heightMap = height.texture;
ssao.noiseMap = noiseTexture.texture;

let allDone = false;
const logDiv = document.querySelector("#log");
function log(msg) {
  if (allDone) return;
  const p = document.createElement("p");
  p.textContent = msg;
  logDiv.append(p);
}

let running = true;
let angle = 0;
let angleTo = angle;

let WIDTH = -1;
let HEIGHT = -1;
let geometry = box;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
  // if (e.code === "KeyE") {
  //   angleTo += Math.PI / 2;
  // }
  // if (e.code === "KeyR") {
  //   angleTo -= Math.PI / 2;
  // }
  if (e.code === "KeyL") {
    geometry = brick;
    generate(WIDTH, HEIGHT, geometry);
  }
  if (e.code === "KeyB") {
    geometry = box;
    generate(WIDTH, HEIGHT, geometry);
  }
  if (e.code === "KeyC") {
    geometry = capsule;
    generate(WIDTH, HEIGHT, geometry);
  }
  if (e.code === "Digit1") {
    if (WIDTH !== 50) {
      generate(50, 50, geometry);
    }
  }
  if (e.code === "Digit2") {
    if (WIDTH !== 100) {
      generate(100, 100, geometry);
    }
  }
  if (e.code === "Digit3") {
    if (WIDTH !== 250) {
      generate(250, 250, geometry);
    }
  }
  if (e.code === "Digit4") {
    if (WIDTH !== 500) {
      generate(500, 500, geometry);
    }
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#size1Btn").addEventListener("click", (e) => {
  if (WIDTH !== 50) {
    generate(50, 50, geometry);
  }
});

document.querySelector("#size2Btn").addEventListener("click", (e) => {
  if (WIDTH !== 100) {
    generate(100, 100, geometry);
  }
});

document.querySelector("#size3Btn").addEventListener("click", (e) => {
  if (WIDTH !== 250) {
    generate(250, 250, geometry);
  }
});

document.querySelector("#size4Btn").addEventListener("click", (e) => {
  if (WIDTH !== 500) {
    generate(500, 500, geometry);
  }
});

document.querySelector("#legoBtn").addEventListener("click", (e) => {
  geometry = brick;
  generate(WIDTH, HEIGHT, geometry);
});

document.querySelector("#boxBtn").addEventListener("click", (e) => {
  geometry = box;
  generate(WIDTH, HEIGHT, geometry);
});

document.querySelector("#capsuleBtn").addEventListener("click", (e) => {
  geometry = capsule;
  generate(WIDTH, HEIGHT, geometry);
});

function generate(w, h, geoSrc) {
  const geometry = geoSrc.clone();
  WIDTH = w;
  HEIGHT = h;

  if (mesh) {
    scene.remove(mesh);
    mesh.geometry.dispose();
  }

  noiseTexture.setSize(w, h);
  copyPass.setSize(w, h);
  height.setSize(w, h);
  ssao.shader.uniforms.dimensions.value.set(w, h);
  ssao.shader.uniforms.blockiness.value = 40 * (w / 100);

  noiseTexture.render();

  const points = [];
  const dummy = new Object3D();

  geometry.scale(1 / w, 1 / w, 1 / w);
  const e = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      dummy.position.set(
        x / w + randomInRange(-e, e),
        0 + randomInRange(-e, e),
        y / h + randomInRange(-e, e)
      );
      points.push(dummy.position.clone());
    }
  }

  mesh = new InstancedMesh(geometry, new MeshNormalMaterial(), points.length);
  scene.add(mesh);

  for (let i = 0; i < points.length; i++) {
    dummy.position.copy(points[i]);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.rotation.x = -Math.PI / 2;
  running = true;
}

generate(100, 100, geometry);

let time = 0;
let prevTime = performance.now();

async function render() {
  const t = performance.now();
  time += t - prevTime;
  prevTime = t;

  if (running) {
    await gum.ready();
    log("Awaiting face...");

    const predictions = await model.estimateFaces({
      input: gum.video,
    });

    logDiv.style.opacity = 0;
    allDone = true;

    noiseTexture.shader.uniforms.time.value = time / 10000;
    noiseTexture.render();
    copyPass.render(renderer);

    const w = gum.video.videoWidth;
    const h = gum.video.videoHeight;
    if (w !== faceGeometry.w || h !== faceGeometry.h) {
      faceGeometry.setSize(w, h);
      faceCamera.left = -0.5 * w;
      faceCamera.right = 0.5 * w;
      faceCamera.top = 0.5 * h;
      faceCamera.bottom = -0.5 * h;
      faceCamera.updateProjectionMatrix();
    }

    if (predictions.length > 0) {
      faceGeometry.update(predictions[0]);
    }
  }

  angle += (angleTo - angle) * 0.1;
  mesh.rotation.y = angle;

  renderer.setRenderTarget(height);
  renderer.render(faceScene, faceCamera);
  renderer.setRenderTarget(null);

  ssao.render(renderer, scene, camera);
  post.render(ssao.output);

  // renderer.render(scene, camera);

  renderer.setAnimationLoop(render);
}

async function init() {
  log("Loading tensorflow backend...");
  await Promise.all([tf.setBackend("webgl")]);
  log("Loading model...");
  model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
  );
  log("Awaiting video...");
  render();
}

function myResize(w, h, dpr) {
  ssao.setSize(w, h, dpr);
  post.setSize(w, h, dpr);
}
addResize(myResize);

resize();
init();
