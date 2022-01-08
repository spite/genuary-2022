import {
  BufferGeometry,
  BufferAttribute,
  GLSL3,
  Vector3,
  Points,
  Scene,
  RawShaderMaterial,
} from "../third_party/three.module.js";
import { randomInRange } from "../modules/Maf.js";
import { getFBO } from "../modules/fbo.js";

const vertexShader = `
precision highp float;

in vec3 position;
in float scale;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  vec4 p = vec4(position, 1.);
  vec4 mvPosition = modelViewMatrix * p;
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = scale * 50. / -mvPosition.z; 
}`;

const fragmentShader = `
precision highp float;

out vec4 color;

float aastep(in float threshold, in float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return 1.-smoothstep(threshold-afwidth, threshold+afwidth, value);
}

void main() {
  float d = length(gl_PointCoord.xy - .5);
  float b = aastep(.5, d);
  color = vec4(1., 1., 1., b);
}`;

const scene = new Scene();

const POINTS = 10000;

const geo = new BufferGeometry();
const positions = new Float32Array(POINTS * 3);
const scale = new Float32Array(POINTS);
const p = new Vector3();

geo.setAttribute("position", new BufferAttribute(positions, 3));
geo.setAttribute("scale", new BufferAttribute(scale, 1));

const mat = new RawShaderMaterial({
  uniforms: {},
  vertexShader,
  fragmentShader,
  transparent: true,
  depthTest: false,
  depthWrite: false,
  glslVersion: GLSL3,
});
const mesh = new Points(geo, mat);
randomize();
scene.add(mesh);

const fbo = getFBO(1, 1, {}, true);

function update(renderer, camera) {
  renderer.setRenderTarget(fbo);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);
}

function resize(w, h) {
  fbo.setSize(w, h);
}

function randomize() {
  const r = 9;
  for (let i = 0; i < POINTS; i++) {
    p.set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, 1));
    p.normalize().multiplyScalar(r);
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
    scale[i] = randomInRange(0.1, 1);
  }
  geo.attributes.position.needsUpdate = true;
  geo.attributes.scale.needsUpdate = true;
}

export { update, resize, randomize, fbo };
