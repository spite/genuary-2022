import {
  InstancedMesh,
  Matrix4,
  MeshStandardMaterial,
  Object3D,
  Quaternion,
  Vector3,
} from "../third_party/three.module.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";
import { clamp, randomInRange } from "../modules/Maf.js";

const minLength = 60;
const maxLength = 120;
let twistiness;
let randomness;
const arms = 50;

const up = new Vector3(0, 1, 0);

function createArm(points, random) {
  const length = randomInRange(minLength, maxLength);
  let scale = 3;

  const pos = new Vector3();
  const prevPos = new Vector3();
  const dir = new Vector3();
  const nDir = new Vector3();
  const diff = new Vector3();
  const offset = new Vector3();
  const uDir = new Vector3();
  const m = new Matrix4();
  const q = new Quaternion();

  pos.set(0, 0, 0);
  prevPos.set(0, 0, 0);

  dir
    .set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, 1))
    .normalize();

  for (let i = 0; i < length; i += 0.5) {
    nDir
      .set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, 1))
      .normalize();
    diff.copy(dir).sub(nDir).multiplyScalar(twistiness);
    dir.add(diff).normalize();

    scale += randomInRange(-0.05, 0.05);
    scale = clamp(scale, 0.2, 0.3);
    scale -= 0.001 * i;
    scale *= 1.1;
    scale = Math.max(scale, 0);
    scale *= 1 - i / length;

    offset
      .set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, 1))
      .normalize()
      .multiplyScalar(randomness);

    uDir
      .copy(dir)
      .add(offset)
      .normalize()
      .multiplyScalar(scale * 0.05);

    prevPos.copy(pos);
    pos.add(uDir);

    if (random) {
      up.set(
        randomInRange(-1, 1),
        randomInRange(-1, 1),
        randomInRange(-1, 1)
      ).normalize();
    }

    m.lookAt(prevPos, pos, up);

    points.push({
      position: pos.clone(),
      scale,
      rotation: q.setFromRotationMatrix(m).clone(),
    });
  }
}

function createEldritch() {
  twistiness = randomInRange(0.05, 0.3);
  randomness = randomInRange(0, 0.5);
  const random = Math.random() > 0.75;

  const points = [];
  for (let i = 0; i < arms; i++) {
    createArm(points, random);
  }

  const mat = new MeshStandardMaterial({
    roughness: 0.2,
    metalness: 0,
    color: 0xffffff,
  });
  const geo = new RoundedBoxGeometry(0.1, 0.1, 0.05, 0.005, 2);
  const mesh = new InstancedMesh(geo, mat, points.length);

  const dummy = new Object3D();
  const finalScale = randomInRange(1.25, 2.5);

  let prevT = -1;

  return {
    mesh,
    update: (t) => {
      if (prevT >= 1) return;
      prevT = t;
      const factor = 1 * (1 - t);
      let ptr = 0;
      for (let p of points) {
        dummy.position
          .copy(p.position)
          .multiplyScalar(clamp(1.25 - 0.05 * p.scale * factor, 0, 100));
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

export { createEldritch };
