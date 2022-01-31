import { Vector2, Vector3 } from "../third_party/three.module.js";
import { randomInRange, clamp, mix } from "../modules/Maf.js";

// https://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm

function sdTorus(p, t) {
  const pp = new Vector2(p.x, p.y);
  const q = new Vector2(pp.length() - t.x, p.z);
  return q.length() - t.y;
}

function sdSphere(p, r) {
  return p.length() - r;
}

function sdOctahedron(p, s) {
  p.x = Math.abs(p.x);
  p.y = Math.abs(p.y);
  p.z = Math.abs(p.z);
  return (p.x + p.y + p.z - s) * 0.57735027;
}

function sdRoundBox(p, b, r) {
  const q = p.clone();
  q.x = Math.abs(q.x);
  q.y = Math.abs(q.y);
  q.z = Math.abs(q.z);
  q.sub(b);

  q.x = Math.max(q.x, 0);
  q.y = Math.max(q.y, 0);
  q.z = Math.max(q.z, 0);

  return q.length() + Math.min(Math.max(q.x, Math.max(q.y, q.z)), 0.0) - r;
}

function sdRoundedCylinder(p, ra, rb, h) {
  const d = new Vector2(
    new Vector2(p.x, p.z).length() - 2.0 * ra + rb,
    Math.abs(p.y) - h
  );
  d.x = Math.max(d.x, 0);
  d.y = Math.max(d.y, 0);
  d.z = Math.max(d.z, 0);

  return Math.min(Math.max(d.x, d.y), 0.0) + d.length() - rb;
}

function opOnion(sdf, thickness) {
  return Math.abs(sdf) - thickness;
}

function opSmoothUnion(d1, d2, k) {
  const h = clamp(0.5 + (0.5 * (d2 - d1)) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

function generateBlobFn() {
  const points = [];
  const radii = [];
  for (let i = 0; i < 5; i++) {
    const r = randomInRange(0.15, 0.25);
    radii.push(r);
    const d = 0.45 - r;
    points.push(
      new Vector3(
        randomInRange(-d, d),
        randomInRange(-d, d),
        randomInRange(-d, d)
      )
    );
  }
  return (p) => {
    let d;
    for (let i = 0; i < points.length; i++) {
      const v = sdSphere(p.clone().sub(points[i]), radii[i]);
      if (d === undefined) {
        d = v;
      } else {
        d = opSmoothUnion(d, v, 0.1);
      }
    }
    return d;
  };
}

function sdCone(p, c, h) {
  const t = new Vector2(p.x, p.z);
  const q = t.length();
  t.set(q, p.y);
  const d = c.dot(t);
  return Math.max(d, -h - p.y);
}

export {
  sdTorus,
  sdSphere,
  sdRoundBox,
  sdRoundedCylinder,
  generateBlobFn,
  opOnion,
  sdOctahedron,
};
