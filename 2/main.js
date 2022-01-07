import {
  scene,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import { Poisson2D } from "../modules/poisson.js";
import {
  BoxBufferGeometry,
  Points,
  Mesh,
  HemisphereLight,
  DirectionalLight,
  PerspectiveCamera,
  RawShaderMaterial,
  Scene,
  BufferGeometry,
  BufferAttribute,
  TorusBufferGeometry,
  MeshStandardMaterial,
} from "../third_party/three.module.js";
import { getFBO } from "../modules/fbo.js";
import { OrbitControls } from "../third_party/OrbitControls.js";

const vertexShader = `#version 300 es
precision highp float;

in vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform sampler2D colorMap;
uniform float ratio;

float luma(in vec4 c) {
  return dot(c.rgb, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec4 p = vec4(position, 1.);
  vec4 mvPosition = modelViewMatrix * p;
  gl_Position = projectionMatrix * mvPosition;
  vec2 uv = (position.xy / 10.) + .5;
  vec4 c = texture(colorMap, uv);
  float l = luma(c);
  gl_PointSize = l * 100. / -mvPosition.z; 
}`;

const fragmentShader = `#version 300 es
precision highp float;

out vec4 color;

void main() {
  float d = length(gl_PointCoord.xy - .5);
  if(d>.5){
    discard;
  }
  color = vec4(1.);
}`;

const fbo = getFBO(512, 512, {}, true);
const fboScene = new Scene();
const fboCamera = new PerspectiveCamera(45, 1, 0.1, 100);
fboCamera.position.set(2, 2, 2);
fboCamera.lookAt(fboScene.position);
const fboControls = new OrbitControls(fboCamera, renderer.domElement);
const fboMat = new MeshStandardMaterial({ roughness: 0.5, metalness: 0 });
const fboBox = new Mesh(new BoxBufferGeometry(0.75, 0.75, 0.75), fboMat);
fboScene.add(fboBox);
fboBox.castShadow = fboBox.receiveShadow = true;
const fboTorus = new Mesh(new TorusBufferGeometry(1, 0.25, 100, 30), fboMat);
fboScene.add(fboTorus);
fboTorus.castShadow = fboTorus.receiveShadow = true;

const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);
fboScene.add(hemiLight);

const dirLight = new DirectionalLight(0xffffff, 0.5);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(-1, 1.75, 1);
dirLight.position.multiplyScalar(30);
fboScene.add(dirLight);

dirLight.castShadow = true;

renderer.shadowMap.enabled = true;

const poisson = new Poisson2D(10, 10, 0.05);
const points = poisson.calculate();

const geo = new BufferGeometry();
const positions = new Float32Array(points.length * 3);
for (let i = 0; i < points.length; i++) {
  const p = points[i];
  positions[i * 3] = p.x - 5;
  positions[i * 3 + 1] = p.y - 5;
  positions[i * 3 + 2] = 0;
}
geo.setAttribute("position", new BufferAttribute(positions, 3));

const mat = new RawShaderMaterial({
  uniforms: { ratio: { value: 1 }, colorMap: { value: fbo.texture } },
  vertexShader,
  fragmentShader,
});
const mesh = new Points(geo, mat);

camera.position.set(0, 0, 10);
camera.lookAt(scene.position);

scene.add(mesh);

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
function render() {
  const time = performance.now();
  const dt = (time - prevTime) / 1000;
  prevTime = time;
  if (running) {
    fboBox.rotation.y += 0.49 * dt;
    fboTorus.rotation.x += 0.51 * dt;
  }
  renderer.setRenderTarget(fbo);
  renderer.render(fboScene, fboCamera);
  renderer.setRenderTarget(null);

  renderer.render(scene, camera);
  renderer.setAnimationLoop(render);
}

render();
