import { Vector3 } from "../third_party/three.module.js";
import { scale } from "../modules/Maf.js";

function generateVoronoi(data, width, height, depth, worley) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let ptr = 0;
  const p = new Vector3();
  for (let z = 0; z < depth; z++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        p.set(x / width, y / height, z / depth);
        const res = worley.getEuclidean(p, 1);
        const v = res.d;
        const id = res.id;
        min = Math.min(min, v);
        max = Math.max(max, v);
        data[ptr] = v;
        data[ptr + 1] = id;
        ptr += 2;
      }
    }
  }
  for (let i = 0; i < data.length; i += 2) {
    data[i] = scale(min, max, 0, 1, data[i]);
  }
}

export { generateVoronoi };
