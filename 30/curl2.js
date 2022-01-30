import {
  CatmullRomCurve3,
  Color,
  InstancedMesh,
  Matrix4,
  MeshStandardMaterial,
  Object3D,
  Quaternion,
  Vector3,
} from "../third_party/three.module.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";
import { clamp, randomInRange, TAU } from "../modules/Maf.js";
import { curl, generateNoiseFunction } from "../modules/curl.js";
import { pointsOnSphere } from "../modules/Fibonacci.js";

const minLength = 60;
const maxLength = 120;
const twistiness = 1 * 0.2;
const randomness = 1 * 0.25;
const arms = 50;

const up = new Vector3(0, 1, 0);

let fn;

function createArm(points, o, twistiness) {
  const length = randomInRange(minLength, maxLength);
  let scale = 3;

  const pos = new Vector3();
  const prevPos = new Vector3();
  const m = new Matrix4();
  const q = new Quaternion();
  const q2 = new Quaternion();
  const n = new Vector3();
  const prevDir = new Vector3();

  const offset = o.clone();

  pos.set(0, 0, 0);
  prevPos.set(0, 0, 0);

  for (let i = 0; i < length; i += 0.5) {
    const dir = curl(pos.clone().add(offset).multiplyScalar(twistiness), fn);
    dir.normalize().multiplyScalar(0.1 * scale);
    pos.add(dir);

    scale = 1 - i / length;

    points.push(pos.clone());
  }
}

function lerp(frames, i) {
  const from = Math.floor(i);
  const to = Math.ceil(i);
  const v = i % 1;
  return {
    normal: frames.normals[from].clone().lerp(frames.normals[to], v),
    binormal: frames.binormals[from].clone().lerp(frames.binormals[to], v),
    tangent: frames.tangents[from].clone().lerp(frames.tangents[to], v),
  };
}

function createCurl() {
  fn = generateNoiseFunction();
  const seeds = pointsOnSphere(arms);
  const twistiness = randomInRange(0.1, 0.5);
  const random = Math.random() > 0.75;

  const points = [];
  for (let i = 0; i < arms; i++) {
    const armPoints = [];
    createArm(armPoints, seeds[i].clone().multiplyScalar(30), twistiness);
    const path = new CatmullRomCurve3(armPoints);
    const segments = 100;
    const frames = path.computeFrenetFrames(segments - 1);
    const position = new Vector3().copy(armPoints[0]);
    const m = new Matrix4();
    let ptr = 0;
    for (let i = 0; i < segments; i++) {
      const scale = 1 - i / segments;
      const frame = lerp(frames, ptr);
      m.makeBasis(frame.binormal, frame.tangent, frame.normal);
      if (random) {
        const rot = new Matrix4();
        rot.makeRotationZ(randomInRange(0, TAU));
        m.multiply(rot);
      }
      points.push({
        position: position.clone().multiplyScalar(0.5),
        scale: 6 * scale,
        rotation: new Quaternion().setFromRotationMatrix(m),
      });
      position.sub(frame.normal.multiplyScalar(scale * 0.5));
      ptr += scale;
    }
  }

  const mat = new MeshStandardMaterial({
    roughness: 0.2,
    metalness: 0,
    color: 0xffffff,
  });
  const geo = new RoundedBoxGeometry(0.1, 0.1, 0.05, 0.005, 2);
  // const geo = new BoxBufferGeometry(0.1, 0.1, 0.05);
  const mesh = new InstancedMesh(geo, mat, points.length);

  const dummy = new Object3D();
  mesh.scale.setScalar(0.085);
  let prevT = -1;

  const finalScale = randomInRange(1, 2);

  return {
    mesh,
    update: (t) => {
      if (prevT >= 1) return;
      prevT = t;
      const factor = 5 * (1 - t);
      let ptr = 0;
      for (let p of points) {
        dummy.position
          .copy(p.position)
          .multiplyScalar(clamp(1 - 0.05 * p.scale * factor, 0, 100));
        dummy.scale.setScalar(clamp(p.scale * finalScale - factor, 0, 100));
        dummy.quaternion.copy(p.rotation);
        dummy.updateMatrix();
        mesh.setMatrixAt(ptr, dummy.matrix);
        ptr++;
      }
      mesh.instanceMatrix.needsUpdate = true;
    },
  };
}

export { createCurl };
