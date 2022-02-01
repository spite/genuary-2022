import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import {
  DataTexture,
  DoubleSide,
  FloatType,
  GLSL3,
  InstancedBufferAttribute,
  InstancedMesh,
  Color,
  NearestFilter,
  RawShaderMaterial,
  RGBAFormat,
  RGBFormat,
  LinearFilter,
  MeshNormalMaterial,
  Vector3,
} from "../third_party/three.module.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";
import { randomInRange } from "../modules/Maf.js";
import { shader as curl } from "../shaders/curl.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";
import {
  circus,
  warm,
  warm2,
  warm3,
  natural,
  natural2,
  circus2,
  dragon,
} from "../modules/palettes.js";
import { Post } from "./post.js";
import { getFBO } from "../modules/fbo.js";
import { shader as hsl } from "../shaders/hsl.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { SSAO } from "./SSAO.js";

const post = new Post(renderer);
const ssao = new SSAO();

const controls = getControls();

const LINES = 800;
const POINTS = 80;

const simVs = `precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;

const simFs = `precision highp float;

in vec2 vUv;

uniform float persistence;
uniform sampler2D originTex;
uniform sampler2D map;
uniform bool reset;
uniform float time;
uniform float speed;
uniform float noiseScale;

out vec4 color;

${curl}

void main() {
  vec2 size = vec2(textureSize(map, 0));
  float x = gl_FragCoord.x;
  vec4 c;
  if(reset) {
    c = texture(originTex, vec2(0., vUv.y));
  } else if(x <= 1.) { 
    c = texture(map, vec2(0., vUv.y));
    vec3 n = curlNoise(c.xyz * .05 * noiseScale, time);
    c.xyz += normalize(n) * speed / 50.;
    if(length(c) > 5.) {
      c = texture(originTex, vec2(0., vUv.y));
    }
  } else {
    float offset = 1. / size.x;
    c = texture(map, vec2(vUv.x - offset, vUv.y));
  }
  color = c;
}`;

const step = 4;

const simShader = new RawShaderMaterial({
  uniforms: {
    originTex: { value: null },
    speed: { value: step },
    noiseScale: { value: 1 },
    map: { value: null },
    reset: { value: true },
    persistence: { value: 1 },
    time: { value: 0 },
  },
  vertexShader: simVs,
  fragmentShader: simFs,
  glslVersion: GLSL3,
});

const sim = new ShaderPingPongPass(simShader, {
  type: FloatType,
  format: RGBAFormat,
  minFilter: NearestFilter,
  magFilter: NearestFilter,
});
sim.setSize(POINTS, LINES);

function getTextureFromPalette(palette) {
  const g = new GradientLinear(palette);
  const b = g.getAt(Math.random());
  const tmp = new Vector3();
  b.getHSL(tmp);
  tmp.s = Math.min(tmp.s, 0.5);
  b.setHSL(tmp.h, tmp.s, tmp.l);
  renderer.setClearColor(b, 1);
  ssao.shader.uniforms.background.value = b;
  const gradientData = new Uint8Array(palette.length * 3);
  for (let i = 0; i < palette.length; i++) {
    const c = new Color(palette[i]);
    gradientData[i * 3] = c.r * 255;
    gradientData[i * 3 + 1] = c.g * 255;
    gradientData[i * 3 + 2] = c.b * 255;
  }
  const gradient = new DataTexture(gradientData, palette.length, 1, RGBFormat);
  gradient.minFilter = LinearFilter;
  gradient.magFilter = LinearFilter;
  return gradient;
}

const geo = new RoundedBoxGeometry(2, 2, step, 0.1, 1);
geo.translate(0, 0, step / 2);
const offsets = new Float32Array(LINES * POINTS * 2);
let ptr = 0;
for (let i = 0; i < LINES; i++) {
  for (let j = 0; j < POINTS; j++) {
    offsets[ptr + 1] = i / LINES;
    offsets[ptr + 0] = j / POINTS;
    ptr += 2;
  }
}
geo.setAttribute("offset", new InstancedBufferAttribute(offsets, 2));

const palettes = [
  circus,
  warm,
  warm2,
  warm3,
  natural,
  natural2,
  circus2,
  dragon,
];

const pointMat = new MeshNormalMaterial();

const pointMesh = new InstancedMesh(geo, pointMat, LINES * POINTS);
scene.add(pointMesh);

function randomize() {
  const d = randomInRange(1, 3);
  const origins = new Float32Array(LINES * 3);
  for (let i = 0; i < LINES; i++) {
    origins[i * 3] = randomInRange(-d, d);
    origins[i * 3 + 1] = randomInRange(-d, d);
    origins[i * 3 + 2] = randomInRange(-d, d);
  }
  const originTex = new DataTexture(
    origins,
    1,
    LINES,
    RGBFormat,
    FloatType,
    undefined,
    undefined,
    undefined,
    NearestFilter,
    NearestFilter
  );

  simShader.uniforms.originTex.value = originTex;
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  ssao.shader.uniforms.gradient.value = getTextureFromPalette(palette);
  simShader.uniforms.noiseScale.value = randomInRange(0.5, 2);
  simShader.uniforms.persistence.value = randomInRange(1 / 200, 200);
  simShader.uniforms.reset.value = true;
}

randomize();
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

const colorFBO = getFBO(1, 1, {}, true);
camera.position.normalize().multiplyScalar(15);

ssao.sim = sim.texture;

function render() {
  if (running) {
    simShader.uniforms.map.value = sim.fbos[sim.currentFBO].texture;

    let time = performance.now() / 1000;
    simShader.uniforms.time.value = time;
    sim.render(renderer);
    simShader.uniforms.reset.value = false;
  }

  renderer.setRenderTarget(colorFBO);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  ssao.render(renderer, scene, camera);
  post.render(ssao.output);

  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr) {
  colorFBO.setSize(w * dpr, h * dpr);
  post.setSize(w, h, dpr);
  ssao.setSize(w, h, dpr);
}
addResize(myResize);

resize();
render();
