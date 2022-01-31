import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import { MarchingCubesGeometry } from "../third_party/MarchingCubesGeometry.js";
import {
  Mesh,
  Vector3,
  BufferAttribute,
  MeshStandardMaterial,
  SpotLight,
  HemisphereLight,
  BufferGeometry,
  PCFSoftShadowMap,
  Vector2,
  Group,
  ACESFilmicToneMapping,
  FogExp2,
  DoubleSide,
  sRGBEncoding,
  PlaneBufferGeometry,
} from "../third_party/three.module.js";
import {
  generateBlobFn,
  opOnion,
  sdTorus,
  sdRoundBox,
  sdRoundedCylinder,
  sdOctahedron,
  sdSphere,
} from "./sdfs.js";
import { generateVoronoi } from "./voronoi.js";
import { randomInRange } from "../modules/Maf.js";
import { WorleyNoise } from "./worley.js";
import { relax, precalcNeighbours } from "./relax.js";
import { toIndexed } from "./toIndexed.js";
import { initHdrEnv } from "../modules/hdri.js";
import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";

const ssao = new SSAO();
const post = new Post(renderer);

renderer.outputEncoding = sRGBEncoding;
renderer.toneMapping = ACESFilmicToneMapping;

let material;
let solidMaterial;
let envMap;
let solid;
let visible = true;

const ambientColor = 0x101010; //0xeeeeee;
renderer.setClearColor(ambientColor, 1);
scene.fog = new FogExp2(ambientColor, 0.05);

// renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.physicallyCorrectLights = true;

function clone(geo, count) {
  const neoGeo = new BufferGeometry();
  const vertices = geo.attributes.position.array.slice(0, count * 3);
  const normals = geo.attributes.normal.array.slice(0, count * 3);
  neoGeo.setAttribute("position", new BufferAttribute(vertices, 3));
  neoGeo.setAttribute("normal", new BufferAttribute(normals, 3));
  return neoGeo;
}

const genLog = document.querySelector("#generating");
const instLog = document.querySelector("#instructions");

let generating = false;

async function rand() {
  if (generating) {
    return;
  }
  generating = true;
  genLog.style.display = "flex";
  return new Promise((resolve, reject) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        randomize();
        genLog.style.display = "none";
        resolve();
        generating = false;
        instLog.classList.add("visible");
        setTimeout(() => instLog.classList.remove("visible"), 2000);
      });
    });
  });
}

function randomize() {
  while (group.children.length) {
    const m = group.children[0];
    m.geometry.dispose();
    group.remove(m);
  }
  const worley = new WorleyNoise(Math.round(randomInRange(10, 30)));

  const size = 50;
  const voronoiSize = size;
  const data = new Float32Array(voronoiSize * voronoiSize * voronoiSize * 2);
  generateVoronoi(data, voronoiSize, voronoiSize, voronoiSize, worley);

  const mc = new MarchingCubesGeometry(size, false, false, 100000);
  const p = new Vector3();

  const q = new Vector2(0.3, 0.15);
  const q2 = new Vector2(0.3, 0.1);

  const box = new Vector3(0.25, 0.25, 0.25);
  const box2 = new Vector3(0.2, 0.2, 0.2);
  const cylRadius = randomInRange(0.1, 0.2); // main radius
  const cylRadius2 = randomInRange(0.1, 0.2); // border radius

  const blobFn = generateBlobFn();

  const fns = [
    (p) => sdTorus(p, q),
    (p) => sdSphere(p, 0.4),
    (p) => sdOctahedron(p, 0.1) - 0.2,
    (p) => sdRoundBox(p, box, 0.1),
    (p) => sdRoundedCylinder(p, cylRadius, cylRadius2, 0.25),
    (p) => blobFn(p),
  ];
  let dFn = fns[Math.floor(Math.random() * fns.length)];

  mc.reset();
  let ptr = 0;
  for (let z = 0; z < size; z++) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let v = -1;
        p.set(x / size - 0.5, y / size - 0.5, z / size - 0.5);
        const d = dFn(p);
        mc.setCell(x, y, z, -d);
      }
    }
  }

  mc.invalidated = true;
  mc.build();
  solid = new Mesh(mc.clone(), solidMaterial);
  solid.castShadow = solid.receiveShadow = true;
  group.add(solid);

  mc.reset();
  ptr = 0;
  for (let z = 0; z < size; z++) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let v = -1;
        p.set(x / size - 0.5, y / size - 0.5, z / size - 0.5);
        const d = opOnion(dFn(p), 0.025);

        const cx = Math.floor((x * voronoiSize) / size);
        const cy = Math.floor((y * voronoiSize) / size);
        const cz = Math.floor((z * voronoiSize) / size);
        const scalePtr =
          2 * (cz * voronoiSize * voronoiSize + cy * voronoiSize + cx);
        v = 2 * data[scalePtr] - 1;
        v -= 0.925;

        mc.setCell(x, y, z, Math.max(-v, d));

        ptr += 2;
      }
    }
  }

  mc.invalidated = true;

  const count = mc.build();

  if (count) {
    const geo = toIndexed(clone(mc, count));
    const neighbours = precalcNeighbours(geo);
    for (let i = 0; i < 6; i++) {
      relax(geo, neighbours);
    }
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    geo.computeBoundingBox();

    // material.wireframe = true;
    // solidMaterial.wireframe = true;
    const mesh = new Mesh(geo, material);
    mesh.castShadow = mesh.receiveShadow = true;
    group.add(mesh);

    // mesh.position.y += 0.5 * (geo.boundingBox.max.y - geo.boundingBox.min.y);
    // solid.position.y = mesh.position.y;
  }

  console.log("Done");
}

const group = new Group();

scene.add(group);

const groundColor = 0x404040; //0xffffff;

const hemiLight = new HemisphereLight(0xffffff, groundColor, 0.6);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const spotLight = new SpotLight(0xffffff, 0.5);
spotLight.position.set(-1, 2, 1);
spotLight.position.multiplyScalar(1);
scene.add(spotLight);

spotLight.castShadow = true;

document.querySelector("#toggleBtn").addEventListener("click", (e) => {
  visible = !visible;
  e.stopPropagation();
  e.preventDefault();
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  rand();
  e.stopPropagation();
  e.preventDefault();
});

const controls = getControls();

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR" && !e.ctrlKey) {
    rand();
  }
  if (e.code === "Space") {
    visible = !visible;
  }
});

function render() {
  solid.visible = visible;

  ssao.render(renderer, scene, camera);
  post.render(ssao.output);

  renderer.setAnimationLoop(render);
}

const ground = new Mesh(
  new PlaneBufferGeometry(1000, 1000),
  new MeshStandardMaterial({ color: groundColor })
);
ground.rotation.x = -Math.PI / 2;
// scene.add(ground);
ground.receiveShadow = true;

async function init() {
  envMap = await initHdrEnv("studio_small_03_1k.hdr", renderer);
  material = new MeshStandardMaterial({
    color: 0xeac251,
    wireframe: !true,
    envMap,
    roughness: 0.2,
    metalness: 1,
    side: DoubleSide,
  });
  solidMaterial = new MeshStandardMaterial({
    color: 0xffffff,
    envMap,
    envMapIntensity: 0.5,
    roughness: 0.1,
    metalness: 0.2,
  });
  // camera.position.set(1, 4, -5).normalize().multiplyScalar(10);
  // camera.lookAt(ground.position);
  await rand();
  render();
}

function myResize(w, h, dPR) {
  ssao.setSize(w, h, dPR);
  post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();
