import { Poisson3D } from "../modules/poisson.js";
import {
  Mesh,
  BufferGeometry,
  BufferAttribute,
  Vector2,
  Vector3,
  Object3D,
} from "../third_party/three.module.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { perlin3 } from "../third_party/perlin.js";
import { curl, generateNoiseFunction } from "../modules/curl.js";
import { pointsOnSphere } from "../modules/Fibonacci.js";
import { randomInRange, parabola } from "../modules/Maf.js";
import { color } from "../third_party/dat.gui.module.js";

const WIDTH = 2048;
const HEIGHT = 2048;
const DEPTH = 2048;

function getSphere() {
  const POINTS = Math.round(randomInRange(200, 500));
  const points = pointsOnSphere(POINTS);
  const scale = randomInRange(0.8, 1.2);
  for (const p of points) {
    p.x *= WIDTH;
    p.y *= HEIGHT;
    p.z *= DEPTH;
    p.x *= 0.5;
    p.y *= 0.5;
    p.z *= 0.5;
    p.multiplyScalar(scale);
  }
  return points;
}

function getGrid() {
  const points = [];
  const step = randomInRange(200, 500);
  const scale = randomInRange(0.8, 1.2);
  for (let z = -0.5 * DEPTH; z < 0.5 * DEPTH; z += step) {
    for (let y = -0.5 * HEIGHT; y < 0.5 * HEIGHT; y += step) {
      for (let x = -0.5 * WIDTH; x < 0.5 * WIDTH; x += step) {
        const p = new Vector3(x, y, z);
        p.multiplyScalar(scale);
        points.push(p);
      }
    }
  }
  return points;
}

function getPoissonBlock() {
  const spacing = 100; //randomInRange(200, 300);
  const pp = new Poisson3D(WIDTH, HEIGHT, DEPTH, spacing);
  const points = pp.calculate();
  const scale = 1; // randomInRange(0.8, 1.2);
  let res = [];
  for (const p of points) {
    p.x -= 0.5 * WIDTH;
    p.y -= 0.5 * HEIGHT;
    p.z -= 0.5 * DEPTH;
    p.multiplyScalar(scale);
    if (p.length() < WIDTH / 2) {
      res.push(p);
    }
  }
  return res;
}

function getRandom() {
  const POINTS = Math.round(randomInRange(200, 500));
  const points = [];
  const scale = randomInRange(0.8, 1.2);
  for (let i = 0; i < POINTS; i++) {
    const p = new Vector3(
      randomInRange(-0.5 * WIDTH, 0.5 * WIDTH),
      randomInRange(-0.5 * HEIGHT, 0.5 * HEIGHT),
      randomInRange(-0.5 * DEPTH, 0.5 * DEPTH)
    );
    p.multiplyScalar(scale);
    points.push(p);
  }
  return points;
}

function getPoints() {
  const mode = 0; // Math.floor(Math.random() * 3);
  switch (mode) {
    case 0:
      return getPoissonBlock();
    case 1:
      return getGrid();
    case 2:
      return getRandom();
  }
}

function getPalette() {
  const palettes = [
    ["#6B9AA0", "#F2C265", "#D84C14", "#7DC4CC", "#F6961C", "#6B9AA0"],
    [
      "#FF6D00",
      "#FBF8EB",
      "#008B99",
      "#F8E1A6",
      "#FDA81F",
      "#B80A01",
      "#480D07",
    ],
    [
      "#EF2006",
      "#350000",
      "#A11104",
      "#ED5910",
      "#F1B52E",
      "#7B5614",
      "#F7F1AC",
    ],
    [
      "#F6D199",
      "#EDA65D",
      "#5B3B16",
      "#1F1408",
      "#AF551E",
      "#FEFBF5",
      "#546A5B",
    ],
    [
      "#D86618",
      "#E78A23",
      "#24110B",
      "#5A2511",
      "#A1401B",
      "#5F5749",
      "#E69958",
      "#E4B08E",
    ],
    [
      "#070707",
      "#B8D00D",
      "#FFFFFF",
      "#59620A",
      "#C6C99E",
      "#515343",
      "#78870B",
    ],
    [
      "#FE9B6A",
      "#2A2E43",
      "#BB4E75",
      "#2A6C8C",
      "#D1CDA6",
      "#FFFEFE",
      "#83A2AD",
    ],
  ];

  return palettes[Math.floor(Math.random() * palettes.length)];
}

const pos = new Vector3();
const group = new Object3D();
const res = new Vector2(1, 1);

const points = getPoints();

function renderLines(borderColor) {
  const minW = randomInRange(0, 0.5);
  const maxW = randomInRange(0.5, 1);
  const wFn = (p) => {
    return minW + maxW + p;
  };
  const palette = getPalette();
  const gradient = new GradientLinear(palette);
  const minLw = randomInRange(0.02, 0.04);
  const maxLw = randomInRange(0.04, 0.08);
  const fn = generateNoiseFunction();
  const scale = randomInRange(0.001, 0.005);
  const colorScale = randomInRange(0.0001, 0.0005);
  let id = 1;
  const LENGTH = 400;
  const clipMode = 2;
  const colorNoise = [];
  for (const p of points) {
    let tx = p.x;
    let ty = p.y;
    let tz = p.z;
    const n =
      0.5 + 0.5 * perlin3(colorScale * tx, colorScale * ty, colorScale * tz);
    colorNoise.push(n);
  }
  let minColor = 10000;
  let maxColor = 0;
  for (const n of colorNoise) {
    minColor = Math.min(minColor, n);
    maxColor = Math.max(maxColor, n);
  }
  let i = 0;
  const lines = [];
  for (const pt of points) {
    let tx = pt.x;
    let ty = pt.y;
    let tz = pt.z;

    const positions = [];
    const sizes = [];
    const colors = [];
    const speed = randomInRange(10, 20);
    const n = (colorNoise[i] - minColor) / (maxColor - minColor);
    const cc = gradient.getAt(n);

    const length = randomInRange(100, LENGTH);
    for (let j = 0; j < length; j++) {
      pos.set(tx, ty, tz);
      let clip = false;
      switch (clipMode) {
        case 0:
          break;
        case 1:
          if (
            pos.x < -WIDTH ||
            pos.x > WIDTH ||
            pos.y < -HEIGHT ||
            pos.y > HEIGHT ||
            pos.z < -DEPTH ||
            pos.z > DEPTH
          ) {
            clip = true;
          }
          break;
        case 2:
          if (pos.length() > 0.5 * WIDTH) {
            clip = true;
          }
          break;
      }
      if (clip) {
        continue;
      }
      if (!clip) {
        pos.multiplyScalar(scale);
        const dir = curl(pos, fn);
        dir.normalize().multiplyScalar(0.5);

        pos.set(tx / WIDTH, ty / HEIGHT, tz / DEPTH);

        tx += speed * dir.x;
        ty += speed * dir.y;
        tz += speed * dir.z;
        positions.push(pos.clone());
        sizes.push(0.001);
        colors.push(cc.clone());
      }
    }

    if (positions.length) {
      lines.push({ points: positions, sizes, colors });
    }

    id++;
    i++;
  }

  const POINTS = lines.reduce((ac, v) => ac + v.points.length - 1, 0);
  const geometry = new BufferGeometry();
  const positions = new Float32Array(POINTS * 3);
  const to = new Float32Array(POINTS * 3);
  const sizes = new Float32Array(POINTS);
  const seeds = new Float32Array(POINTS);
  const colors = new Float32Array(POINTS * 3);
  let ptr = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.points.length - 1; j++) {
      const fromPoint = line.points[j];
      const toPoint = line.points[j + 1];
      positions[ptr] = fromPoint.x;
      positions[ptr + 1] = -fromPoint.y;
      positions[ptr + 2] = fromPoint.z;
      to[ptr] = toPoint.x;
      to[ptr + 1] = -toPoint.y;
      to[ptr + 2] = toPoint.z;
      sizes[ptr / 3] = line.sizes[j];
      seeds[ptr / 3] = Math.random() * 1000000;
      const { r, g, b } = line.colors[j];
      colors[ptr] = r;
      colors[ptr + 1] = g;
      colors[ptr + 2] = b;
      ptr += 3;
    }
  }
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setAttribute("to", new BufferAttribute(to, 3));
  geometry.setAttribute("size", new BufferAttribute(sizes, 1));
  geometry.setAttribute("seed", new BufferAttribute(seeds, 1));
  geometry.setAttribute("color", new BufferAttribute(colors, 3));
  return geometry;
}

function setSize(w, h) {
  res.set(w, h);
}

export { group, setSize, renderLines, getPalette };
