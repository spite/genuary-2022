import {
  BackSide,
  GLSL3,
  IcosahedronBufferGeometry,
  Mesh,
  RawShaderMaterial,
  Scene,
} from "../third_party/three.module.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { shader as fbm } from "../shaders/fbm.js";
import { getFBO } from "../modules/fbo.js";

const stellarVs = `
precision highp float;

in vec3 position;

uniform float offset;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec3 vPosition;
out float n;

${fbm}

void main(){
  vPosition = position;
  n = fbm((vPosition.xyz + vec3(offset, 0., 0.)) / 20.);
  n = smoothstep(.2, .8, n);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;

const stellarFs = `
precision highp float;

in vec3 vPosition;
in float n;

out vec4 color;

${noise3d}

void main() {
  float nn = round(n*10.)/10.;
  color = vec4(vec3(nn), 1.);  
}`;

const stellarMaterial = new RawShaderMaterial({
  uniforms: {
    offset: { value: Math.random() * 1000 },
  },
  vertexShader: stellarVs,
  fragmentShader: stellarFs,
  glslVersion: GLSL3,
  side: BackSide,
});

const mesh = new Mesh(new IcosahedronBufferGeometry(10, 20), stellarMaterial);
const scene = new Scene();
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
  stellarMaterial.uniforms.offset.value = Math.random() * 1000;
}

export { update, resize, randomize, fbo };
