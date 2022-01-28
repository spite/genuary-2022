import {
  CylinderBufferGeometry,
  BoxBufferGeometry,
  CircleBufferGeometry,
  IcosahedronBufferGeometry,
} from "../third_party/three.module.js";
import { mergeGeometries } from "../modules/Geometry.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";

const block = new BoxBufferGeometry(1, 1, 1).toNonIndexed();
const top = new CylinderBufferGeometry(
  1 / 3.5,
  1 / 3.5,
  1 / 2,
  18,
  1,
  true
).toNonIndexed();
top.translate(0, 1 / 2, 0);
const cap = new CircleBufferGeometry(1 / 3.5, 18).toNonIndexed();
cap.rotateX(-Math.PI / 2);
cap.translate(0, 1 / 2 + 1 / 4, 0);
cap.rotateY((Math.PI * 2) / 36);
const brick = mergeGeometries([block, top, cap]);

const box = new RoundedBoxGeometry(1, 1, 1, 0.1, 2);
// const box = new BoxBufferGeometry(1, 1, 1);
const capsule = new IcosahedronBufferGeometry(0.75, 5);

const stick = new CylinderBufferGeometry(0.25, 0.25, 1, 9, 1).toNonIndexed();
const ball = new IcosahedronBufferGeometry(0.5, 5).toNonIndexed();
ball.translate(0, 1 / 2, 0);
const pin = mergeGeometries([ball, stick]);

export { brick, box, capsule, pin };
