import { randomInRange } from "../modules/Maf.js";
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
  BoxBufferGeometry,
  Color,
  InstancedMesh,
  DynamicDrawUsage,
  Object3D,
  OrthographicCamera,
} from "../third_party/three.module.js";
import { Packer } from "./packer.js";
import { colorShader } from "./color.js";
import { getFBO } from "../modules/fbo.js";
import { BlurPass } from "../27/blur.js";
import { waterColorPass, loaded } from "./watercolor.js";

const MAX = 1000;

const canvas = document.createElement("canvas");
canvas.width = 512;
canvas.height = 512;
// document.body.append(canvas);
canvas.style.zIndex = 100;
canvas.style.position = "fixed";
canvas.style.left = 0;
canvas.style.top = 0;
const ctx = canvas.getContext("2d");
ctx.font = "bold 400px 'Cormorant Garamond'";

function generateLetter(letter) {
  ctx.save();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.translate(0.5 * canvas.width, 0.5 * canvas.height);
  ctx.rotate(-Math.PI / 4);
  ctx.scale(1, 1.2);
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText(letter, 0, 0);
  ctx.restore();
}

const mat = colorShader;

camera.position.set(1, 1, 1).multiplyScalar(100);

scene.scale.setScalar(0.01);

function randomString(length, chars) {
  var mask = "";
  if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (chars.indexOf("#") > -1) mask += "0123456789";
  if (chars.indexOf("!") > -1) mask += "!@#$%&{}?";
  // if (chars.indexOf("!") > -1) mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  var result = "";
  for (var i = length; i > 0; --i)
    result += mask[Math.floor(Math.random() * mask.length)];
  return result;
}

const palettes = [
  [0xe61b5f, 0xdccfc6, 0x4c8dff],
  [0x202020, 0xdddddd, 0x999999],
  [0xff1c3c, 0xffca9f, 0x7b727e],
  [0xe0bf59, 0xfc9550, 0x2c9e73],
  [0xcc293f, 0xfec627, 0xdc831f],
  [0x222a77, 0x2dcbd8, 0x27657d],
];

const mesh = new InstancedMesh(new BoxBufferGeometry(1, 1, 1), mat, MAX);
mesh.instanceMatrix.setUsage(DynamicDrawUsage);
scene.add(mesh);

let packer;

function randomize(l, p) {
  waterColorPass.shader.uniforms.colors.value = (
    p || palettes[Math.floor(Math.random() * palettes.length)]
  ).map((e) => new Color(e));

  const letter = l || randomString(1, "aA#!");
  console.log(letter);
  generateLetter(letter);
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height);

  packer = new Packer((p) => {
    if (p.rectangles.length < MAX) {
      const r = Math.min(MAX - p.rectangles.length, 2);
      for (let i = 0; i < r; i++) {
        p.addRectangle();
      }
    }
  }, data);

  packer.addRectangle();

  // do {
  //   packer.grow();
  // } while (!packer.done && packer.rectangles.length < MAX);
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", () => {
  randomize();
});

const orthoCamera = new OrthographicCamera(1, 1, 1, 1, 1, 1000);

orthoCamera.position.set(1, 1, 1).multiplyScalar(20);
orthoCamera.lookAt(scene.position);

const controls = getControls(orthoCamera);

const color = getFBO(1, 1, {}, true);
const blur = new BlurPass(1, 2);

renderer.setClearColor(0xffffff, 0);

function update() {
  const m = 0;

  let ptr = 0;
  const dummy = new Object3D();
  for (const r of packer.rectangles) {
    dummy.position.set(r.x + m, 0.5 * r.height, r.y + m);
    dummy.position.y -= 50;
    dummy.scale.set(r.w, r.height, r.h);
    dummy.updateMatrix();
    mesh.setMatrixAt(ptr, dummy.matrix);
    mesh.setColorAt(ptr, new Color(r.color, 0, 0));
    ptr++;
  }
  for (let i = packer.rectangles.length; i < MAX; i++) {
    dummy.position.set(100000, 0, 0);
    dummy.scale.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.instanceColor.needsUpdate = true;
}

function render() {
  if (!packer.done) {
    for (let i = 0; i < 10; i++) {
      packer.grow();
    }
  }
  update();

  renderer.setRenderTarget(color);
  renderer.render(scene, orthoCamera);
  renderer.setRenderTarget(null);

  blur.source = color.texture;
  blur.render(renderer);

  waterColorPass.shader.uniforms.map.value = blur.output;
  waterColorPass.render(renderer, true);

  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr) {
  const d = 2;
  const aspect = w / h;
  orthoCamera.left = -d * aspect;
  orthoCamera.right = d * aspect;
  orthoCamera.top = d;
  orthoCamera.bottom = -d;
  orthoCamera.updateProjectionMatrix();
  color.setSize(w * dpr, h * dpr);
  blur.setSize(w * dpr, h * dpr);
  waterColorPass.setSize(w * dpr, h * dpr);
}
addResize(myResize);

resize();

async function init() {
  await loaded;
  randomize("G", palettes[0]);
  render();
}

init();

window.generate = (l) => randomize(l);
