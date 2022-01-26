import {
  scene,
  getControls,
  renderer,
  addUpdate,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  GLSL3,
  RawShaderMaterial,
  Mesh,
  Color,
  TorusBufferGeometry,
  Vector3,
  Matrix4,
  HemisphereLight,
  DirectionalLight,
  sRGBEncoding,
  PCFShadowMap,
  MeshStandardMaterial,
  AmbientLight,
} from "../third_party/three.module.js";
import {
  circus,
  warm,
  warm2,
  warm3,
  natural,
  natural2,
  circus2,
  seaside,
  dragon,
} from "../modules/palettes.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import {
  TAU,
  mod,
  PI,
  randomInRange,
  mix,
  smoothStep,
} from "../modules/Maf.js";
import { getFBO } from "../modules/fbo.js";
import { Post } from "./post.js";
import { getMesh } from "./Points.js";
import { MeshSurfaceSampler } from "../third_party/MeshSurfaceSampler.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { perlin3 } from "../third_party/perlin.js";
import { fbm } from "../modules/perlin-functions.js";

const controls = getControls();

const post = new Post(renderer);

const vertexShader = `precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position , 1.);
}`;

const RADIAL = 72; //6;
const TUBE = 100; //8;
const geo = new TorusBufferGeometry(1, 0.3, RADIAL, TUBE); //, 36, 100);

const tmp = new Vector3();
const vertices = geo.attributes.position.array;
const r1 = 1;
const r2 = 0.5;
const r3 = 0.1;
const up = new Vector3(0, 1, 0);
const m = new Matrix4();
for (let i = 0; i < vertices.length; i += 3 * (TUBE + 1)) {
  const a = (i * TAU) / (vertices.length - 3 * (TUBE + 1));
  const ox = r1 * Math.cos(a);
  const oy = 0;
  const oz = r1 * Math.sin(a);
  const aa = (i * PI) / (vertices.length - 3 * (TUBE + 1));
  m.makeRotationZ(aa);
  for (let j = 0; j < TUBE + 1; j++) {
    const b = mod((j * TAU) / TUBE, TAU);
    const x = r2 * Math.cos(b + aa);
    const y = r3 * Math.sin(b + aa);
    const z = 0;
    tmp.set(x, y, z);
    tmp.applyMatrix4(m);
    tmp.applyAxisAngle(up, -a);
    vertices[i + j * 3] = ox + tmp.x;
    vertices[i + j * 3 + 1] = oy + tmp.y;
    vertices[i + j * 3 + 2] = oz + tmp.z;
  }
}

geo.computeVertexNormals();

const mesh = new Mesh(geo, new MeshStandardMaterial());
scene.add(mesh);
mesh.castShadow = mesh.receiveShadow = true;

const tmpCol = new Vector3();
const palettes = [
  circus,
  warm,
  warm2,
  warm3,
  natural,
  natural2,
  circus2,
  seaside,
  dragon,
];
function generatePattern() {
  const freq1 = randomInRange(50, 150);
  const s = randomInRange(25, 75);
  const s2 = randomInRange(50, 200);
  const round1 = randomInRange(5, 30);
  const round2 = randomInRange(5, 30);
  const range1 = randomInRange(10, 50);
  const range2 = randomInRange(10, 50);
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const grad = new GradientLinear(palette);

  const fbmfreq1 = Math.random() > 0.5 ? randomInRange(0, 0.1) : 0;
  const fbmfreq2 = Math.random() > 0.5 ? randomInRange(0, 0.1) : 0;
  const fbmfreq3 = Math.random() > 0.5 ? randomInRange(0, 0.1) : 0;
  const sfbm1 = randomInRange(0.1, 2);
  const sfbm2 = randomInRange(0.1, 2);
  const sfbm3 = randomInRange(0.1, 2);

  const offset = randomInRange(-1000, 1000);
  const stripeFreq = randomInRange(0, 200);
  const stripeThreshold = randomInRange(0, 0.2);
  const stripeWeight = randomInRange(0.0, 0.2);

  const p0 = new Vector3();
  const tmp = new Vector3();

  return (p) => {
    p0.copy(p);
    tmp.copy(p);

    tmp.x += fbmfreq1 * fbm(p0.x * sfbm1, p0.y * sfbm1, p0.z * sfbm1);
    tmp.y += fbmfreq2 * fbm(p0.x * sfbm2, p0.y * sfbm2, p0.z * sfbm2);
    tmp.z += fbmfreq3 * fbm(p0.x * sfbm3, p0.y * sfbm3, p0.z * sfbm3);

    const n1 = 0.5 + 0.5 * perlin3(tmp.x + offset, tmp.y, tmp.z);
    const n2 =
      0.5 +
      0.5 *
        perlin3(
          Math.cos(tmp.x * freq1) + offset,
          Math.cos(tmp.y * freq1),
          Math.cos(tmp.z * freq1)
        );
    const n3 = 0.5 + 0.5 * perlin3(s * tmp.x + offset, s * tmp.y, s * tmp.z);
    const n4 =
      0.5 +
      0.5 *
        perlin3(
          Math.floor(tmp.x / s2) * s2 + offset,
          Math.floor(tmp.y / s2) * s2,
          Math.floor(tmp.z / s2) * s2
        );
    const n = mix(n1, n2, n3);
    const col = grad.getAt(n);
    col.getHSL(tmpCol);
    const l = p0.length();
    const f = Math.floor(l * round1) * range1;
    const f2 = Math.floor(l * round2) * range2;
    tmpCol.l += 0.1 * (0.5 + 0.5 * Math.sin(f));
    tmpCol.s += 0.1 * (0.5 + 0.5 * Math.sin(f2));
    tmpCol.s *= n4;
    const stripe =
      smoothStep(
        0.5 - stripeThreshold,
        0.5 + stripeThreshold,
        0.5 + 0.5 * Math.sin((0.5 * p0.x + p0.z) * stripeFreq)
      ) * stripeWeight;
    tmpCol.l += stripe;

    col.setHSL(tmpCol.h, tmpCol.s, tmpCol.l);

    return col;
  };
}

function randomize() {
  const pattern = generatePattern();
  for (let i = 0; i < colors.length; i++) {
    const p = points[i];
    const c = pattern(p);
    pts.geometry.attributes.color.array[i * 3] = c.r;
    pts.geometry.attributes.color.array[i * 3 + 1] = c.g;
    pts.geometry.attributes.color.array[i * 3 + 2] = c.b;
  }
  pts.geometry.attributes.color.needsUpdate = true;
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", () => {
  randomize();
});

const points = [];
const p = new Vector3(0);
const n = new Vector3();
const colors = [];

const sampler = new MeshSurfaceSampler(mesh).build();
for (let i = 0; i < 200000; i++) {
  sampler.sample(p, n);
  points.push(p.clone());
  colors.push(new Color());
}
const pts = getMesh(points, null, colors);
randomize();
scene.add(pts);

const gl = renderer.getContext();
gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);

renderer.shadowMap.enabled = true;
renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.type = PCFShadowMap;

const ambientLight = new AmbientLight(0x808080);
scene.add(ambientLight);

const hemiLight = new HemisphereLight(0x0aa0ff, 0x2b3b45, 0.25);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xffffff, 1);
dirLight.position
  .set(randomInRange(-1, 1), 1.75, randomInRange(-1, 1))
  .multiplyScalar(10);
dirLight.lookAt(scene.position);
scene.add(dirLight);

dirLight.castShadow = true;

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const d = 2;

dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;

dirLight.shadow.camera.near = 16;
dirLight.shadow.camera.far = 22;
// dirLight.shadow.bias = 0.00005;

// const helper = new CameraHelper(dirLight.shadow.camera);
// scene.add(helper);

renderer.setClearColor(0x202020, 1);

const color1 = getFBO(1, 1, {}, true);
const color2 = getFBO(1, 1, {}, true);

const combineFs = `precision highp float;

in vec2 vUv;

uniform sampler2D color1;
uniform sampler2D color2;

out vec4 color;

void main() {
  vec4 c1 = texture(color1, vUv);
  vec4 c2 = texture(color2, vUv);
  color = c1* c2;
}`;

const combineShader = new RawShaderMaterial({
  uniforms: {
    color1: { value: color1.texture },
    color2: { value: color2.texture },
  },
  vertexShader,
  fragmentShader: combineFs,
  glslVersion: GLSL3,
});
const combinePass = new ShaderPass(combineShader);

function render() {
  // renderer.render(scene, camera);

  renderer.setRenderTarget(color1);
  mesh.visible = true;
  pts.visible = false;
  renderer.render(scene, camera);

  renderer.setRenderTarget(color2);
  mesh.visible = false;
  pts.visible = true;
  renderer.render(scene, camera);

  combinePass.render(renderer);
  post.render(combinePass.texture);

  // renderer.render(scene, dirLight.shadow.camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr) {
  color1.setSize(w * dpr, h * dpr);
  color2.setSize(w * dpr, h * dpr);
  combinePass.setSize(w * dpr, h * dpr);
  post.setSize(w, h, dpr);
}
addResize(myResize);

resize();
render();
