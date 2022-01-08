import {
  scene,
  getControls,
  resize,
  renderer,
  addResize,
  camera,
} from "../modules/renderer.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { RawShaderMaterial, GLSL3 } from "../third_party/three.module.js";
import {
  update as updateStellarBackground,
  resize as resizeStellarBackground,
  randomize as randomizeStellarBackground,
  fbo as stellarBackgound,
} from "./stellar-background.js";
import {
  update as updateStars,
  resize as resizeStars,
  randomize as randomizeStars,
  fbo as stars,
} from "./stars.js";
import {
  update as updateDust,
  resize as resizeDust,
  randomize as randomizeDust,
  fbo as dust,
} from "./dust.js";
import {
  update as updateLines,
  resize as resizeLines,
  randomize as randomizeLines,
  fbo as lines,
} from "./lines.js";
import { shader as orthoVs } from "../shaders/ortho.js";

const controls = getControls();

const fragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D stellarBackground;
uniform sampler2D dust;
uniform sampler2D stars;
uniform sampler2D lines;

out vec4 color;

void main() {
  vec3 bkg = vec3(26., 39., 52.) / 255.;

  vec4 c = texture(stellarBackground, vUv);
  vec4 s = texture(stars, vUv);
  float stipple = gl_FragCoord.x - gl_FragCoord.y;
  float ff = .5 + .5 * sin(stipple / 4.);
  ff = step(.5, ff + .5 - 2. * c.r);
  vec4 d = texture(dust, vUv);
  vec4 l = texture(lines, vUv);

  vec3 final = vec3(.2 * ff) + d.rgb;
  final = max(final, l.rgb);
  final = mix(final, s.rgb, s.a);
  color = vec4(bkg + final, 1.);
}
`;

const shader = new RawShaderMaterial({
  uniforms: {
    stellarBackground: { value: stellarBackgound.texture },
    dust: { value: dust.texture },
    stars: { value: stars.texture },
    lines: { value: lines.texture },
  },
  vertexShader: orthoVs,
  fragmentShader,
  glslVersion: GLSL3,
});

const pass = new ShaderPass(shader, {});

function randomize() {
  randomizeStellarBackground();
  randomizeStars();
  randomizeDust();
  randomizeLines();
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

function render() {
  updateStellarBackground(renderer, camera);
  updateDust(renderer, camera);
  updateStars(renderer, camera);
  updateLines(renderer, camera);

  pass.render(renderer, true);
  renderer.setAnimationLoop(render);
}

function myResize(w, h) {
  resizeStellarBackground(w, h);
  resizeStars(w, h);
  resizeDust(w, h);
  resizeLines(w, h);
  pass.setSize(w, h);
}
addResize(myResize);

resize();
render();
