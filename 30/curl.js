import {
  Color,
  InstancedMesh,
  Matrix4,
  MeshStandardMaterial,
  Object3D,
  OneFactor,
  Quaternion,
  Vector3,
} from "../third_party/three.module.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";
import { clamp, randomInRange } from "../modules/Maf.js";
import { curl, generateNoiseFunction } from "../modules/curl.js";
import { pointsOnSphere } from "../modules/Fibonacci.js";

const minLength = 60;
const maxLength = 120;
const arms = 50;

const up = new Vector3(0, 1, 0);

let fn;

function createArm(points, o, twistiness, random, mark) {
  const length = randomInRange(minLength, maxLength);
  let scale = 3;

  const pos = new Vector3();
  const prevPos = new Vector3();
  const m = new Matrix4();
  const q = new Quaternion();
  const q2 = new Quaternion();
  const n = new Vector3();
  const prevDir = new Vector3();

  const d = 10;
  const offset = o.clone().multiplyScalar(d);

  pos.set(0, 0, 0);
  prevPos.set(0, 0, 0);

  for (let i = 0; i < length; i += 0.5) {
    const dir = curl(pos.clone().add(offset).multiplyScalar(twistiness), fn);
    dir.normalize().multiplyScalar(0.1 * scale);
    pos.add(dir);

    scale = 1 - i / length;

    if (random) {
      up.set(
        randomInRange(-1, 1),
        randomInRange(-1, 1),
        randomInRange(-1, 1)
      ).normalize();
    }
    m.lookAt(prevPos, pos, up);
    q.setFromRotationMatrix(m);
    prevDir.copy(dir);

    prevPos.copy(pos);

    points.push({
      mark,
      position: pos.clone(),
      scale: 3 * scale,
      rotation: q.clone(), // q.setFromRotationMatrix(m).clone(),
    });
  }
}

function createCurl() {
  fn = generateNoiseFunction();
  const seeds = pointsOnSphere(arms);
  const random = Math.random() > 0.75;
  const twistiness = randomInRange(0.1, 0.2);

  const points = [];
  for (let i = 0; i < arms; i++) {
    const mark = i === 0;
    createArm(points, seeds[i], twistiness, random, mark);
  }

  const mat = new MeshStandardMaterial({
    roughness: 0.2,
    metalness: 0,
    color: 0xffffff,
  });
  const geo = new RoundedBoxGeometry(0.1, 0.1, 0.05, 0.005, 2);
  const mesh = new InstancedMesh(geo, mat, points.length);

  const dummy = new Object3D();
  mesh.scale.setScalar(0.1);
  let prevT = -1;

  const finalScale = randomInRange(1.5, 3);

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
          .multiplyScalar(clamp(1.5 - 0.05 * p.scale * factor, 0, 100));
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
