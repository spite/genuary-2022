import {
  scene,
  renderer,
  addUpdate,
  camera,
  getControls,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  GLSL3,
  IcosahedronBufferGeometry,
  Matrix4,
  Mesh,
  MeshNormalMaterial,
  PlaneBufferGeometry,
  RawShaderMaterial,
  RepeatWrapping,
  TextureLoader,
  TorusBufferGeometry,
  TorusKnotBufferGeometry,
  Vector3,
} from "../third_party/three.module.js";
import { shader as noise2d } from "../shaders/noise2d.js";
import { Post } from "./post.js";
import { randomInRange } from "../modules/Maf.js";
import { OBJLoader } from "../third_party/OBJLoader.js";

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadIcosahedron() {
  const model = await loadModel("../assets/icosahedron.obj");
  const geo = model.children[0].geometry;
  geo.center();
  const scale = 0.5;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geo;
}

const post = new Post(renderer);

// https://massmoca.org/event/walldrawing822/
// https://massmoca.org/event/walldrawing824/

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;

out vec4 vEyePosition;
out vec3 vNormal;
out vec3 vPosition;
out vec3 vNormalWorld;
out vec4 vWorldPosition;

void main() {
  vPosition = position;
  vNormal = normalMatrix * normal;
  vWorldPosition = modelMatrix * vec4(position, 1. );
  vEyePosition = viewMatrix * vWorldPosition;

  vNormalWorld = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );

  gl_Position = projectionMatrix * vEyePosition;//modelViewMatrix * vec4(position, 1.);
}`;

const fragmentShader = `precision highp float;

out vec4 color;

uniform sampler2D matCapMap;
uniform sampler2D envMap;
uniform vec3 cameraPosition;

uniform float frequency;
uniform float disturb1;
uniform float disturb2;

in vec4 vEyePosition;
in vec3 vNormal;
in vec3 vPosition;
in vec3 vNormalWorld;
in vec4 vWorldPosition;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

#define PI 3.14159265359

vec4 sampleEnvMap(vec3 dir, sampler2D sampler, float lod) {
  vec2 uv;
  uv.x = atan( dir.z, dir.x );
  uv.y = acos( dir.y );
  uv /= vec2( 2. * PI, PI );
  return textureLod( sampler, uv, lod );
}

vec3 jiggle(in vec3 n, in float f, in float seed) {
  n.x += f * rand(n.xy + seed);
  n.y += f * rand(n.yz + seed);
  n.z += f * rand(n.xy + seed);
  n = normalize(n);
  return n;
}

float luma(in vec4 c) {
  return dot(c.rgb, vec3(0.299, 0.587, 0.114));
}

float atan2(in float y, in float x) {
  bool s = (abs(x) > abs(y));
  return mix(PI/2.0 - atan(x,y), atan(y,x), s);
}

${noise2d}

void main() {

  vec4 c = vec4(0.);

  vec2 p = normalize(vWorldPosition.zx);
  float a = atan2(p.y, p.x);
  a += disturb1 * snoise(vec2(vWorldPosition.y, 0.));
  float h = .1 * sin(frequency * a);
  float f = .1;
  float darken = .1;
  float noise = disturb2 * snoise(vec2(vWorldPosition.y * .5, sin(a)));
  if(vPosition.y + noise > h) {
    f = .3;
    darken = 0.;
  }

  for(int i=0; i < 10; i++) {
    float seed = float(i);
    vec3 n = jiggle(vNormal, f, seed);
    vec3 nWorld = jiggle(vNormalWorld, f, seed);
    vec3 nWorld2 = jiggle(vNormalWorld, 2. * f, seed);
  
    vec3 r = normalize( reflect( normalize( vWorldPosition.xyz - cameraPosition ), nWorld ) );
    r.y *= -1.;

    vec3 r2 = normalize( reflect( normalize( vWorldPosition.xyz - cameraPosition ), nWorld2 ) );
    r2.y *= -1.;

    c += sampleEnvMap(r, envMap, 2.);
    c += sampleEnvMap(r2, envMap, 7.);
  }

  c /= 20.;

  float l = luma(c) - darken;
  l = max(0., l - .2) * 1.2;
  l = mix(1./255., 88./255., l);
  l = exp(1.1*l) - 1.;
  l += darken * 10. * clamp(l- .1, 0., 1.);
  
  color = vec4(vec3(l), 1.);
}`;

const loader = new TextureLoader();

const envMap = loader.load("../assets/kiara_interior_2k.jpg");
envMap.wrapS = envMap.wrapT = RepeatWrapping;

const material = new RawShaderMaterial({
  uniforms: {
    frequency: { value: 4 },
    disturb1: { value: 0.1 },
    disturb2: { value: 0.1 },
    envMap: { value: envMap },
  },
  // wireframe: true,
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
});

const up = new Vector3(0, 1, 0);
function rotate(geo) {
  const target = new Vector3(
    randomInRange(-1, 1),
    randomInRange(-1, 1),
    randomInRange(-1, 1)
  ).normalize();
  const rot = new Matrix4().lookAt(scene.position, target, up);
  geo.applyMatrix4(rot);
  return geo;
}

function generateSphere() {
  material.uniforms.frequency.value = Math.round(randomInRange(1, 5));
  material.uniforms.disturb1.value = randomInRange(0.1, 1);
  material.uniforms.disturb2.value = randomInRange(0.1, 0.5);
  const geo = rotate(new IcosahedronBufferGeometry(0.8, 10));
  return geo;
}

function generateTorus() {
  material.uniforms.frequency.value = Math.round(randomInRange(1, 5));
  material.uniforms.disturb1.value = randomInRange(0.1, 0.2);
  material.uniforms.disturb2.value = randomInRange(0.1, 0.2);
  const geo = rotate(new TorusBufferGeometry(0.5, 0.25, 36, 200));
  return geo;
}

function generateTorusKnot() {
  material.uniforms.frequency.value = Math.round(randomInRange(1, 5));
  material.uniforms.disturb1.value = randomInRange(0.1, 0.2);
  material.uniforms.disturb2.value = randomInRange(0.1, 0.2);
  const geo = rotate(new TorusKnotBufferGeometry(0.5, 0.2, 200, 36));
  return geo;
}

const icosahedronGeometry = await loadIcosahedron();

function generateIcosahedron() {
  material.uniforms.frequency.value = Math.round(randomInRange(1, 5));
  material.uniforms.disturb1.value = randomInRange(0.1, 1);
  material.uniforms.disturb2.value = randomInRange(0.1, 0.5);
  const geo = rotate(icosahedronGeometry);
  return geo;
}

const mesh = new Mesh(generateSphere(), material);
scene.add(mesh);

function randomize() {
  const s = Math.floor(Math.random() * 4);
  let geo;
  switch (s) {
    case 0:
      geo = generateSphere();
      break;
    case 1:
      geo = generateTorus();
      break;
    case 2:
      geo = generateTorusKnot();
      break;
    case 3:
      geo = generateIcosahedron();
      break;
  }

  mesh.geometry = geo;
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

//randomize();

const controls = getControls();

// const plane = new Mesh(
//   new PlaneBufferGeometry(10, 10),
//   new MeshNormalMaterial()
// );
// plane.rotation.x = -Math.PI / 2;
// scene.add(plane);

camera.position.set(0, 0, 3);
camera.lookAt(scene.position);

renderer.setClearColor(0x202020);

function render() {
  post.render(scene, camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h) {
  post.setSize(w, h);
}
addResize(myResize);

resize();
render();
