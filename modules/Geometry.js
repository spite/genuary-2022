import {
  BufferGeometry,
  BufferAttribute,
  Vector3,
} from "../third_party/three.module.js";

function mergeBuffer(geo, id, geometries) {
  let count = geometries.reduce(
    (ac, geo) => ac + geo.attributes[id].count * geo.attributes[id].itemSize,
    0
  );
  const data = new Float32Array(count);
  let ptr = 0;
  for (const geometry of geometries) {
    data.set(geometry.attributes[id].array, ptr);
    ptr += geometry.attributes.position.array.length;
  }
  //data.set(b.attributes[id].array, a.attributes.position.array.length);
  geo.setAttribute(
    id,
    new BufferAttribute(data, geometries[0].attributes[id].itemSize)
  );
}

function mergeGeometries(geometries) {
  const geo = new BufferGeometry();
  mergeBuffer(geo, "position", geometries);
  mergeBuffer(geo, "normal", geometries);
  return geo;
}

export { mergeGeometries };
