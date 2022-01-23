import { Box2, Ray, Vector2 } from "../third_party/three.module.js";

function sqr(x) {
  return x * x;
}

function dist2(v, w) {
  return sqr(v.x - w.x) + sqr(v.y - w.y);
}

function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w);

  if (l2 == 0) return dist2(p, v);

  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;

  if (t < 0) return dist2(p, v);
  if (t > 1) return dist2(p, w);

  return dist2(p, { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y) });
}

function distToSegment(p, v, w) {
  return Math.sqrt(distToSegmentSquared(p, v, w));
}

class Grid {
  constructor(size) {
    this.size = size;
    this.points = new Map();
    this.allPoints = [];
    this.boundingBox = new Box2();
  }

  add(position, p) {
    this.allPoints.push(p);
    const cell = this.get(position);
    this.boundingBox.expandByPoint(position);
    if (cell) {
      cell.push(p);
    } else {
      const hash = this.hash(position);
      this.points.set(hash, [p]);
    }
  }

  remove(position, p) {
    const points = this.get({ x: position.x, y: position.y });
    const idx = points.indexOf(p);
    if (idx !== -1) {
      points.splice(idx, 1);
    }
  }

  get(p) {
    const hash = this.hash(p);
    return this.points.get(hash);
  }

  getDistance(p) {
    const points = this.getPoints(); //this.get(p);
    if (points) {
      let minDistance = 100000;
      for (const point of points) {
        const d = point.distanceTo(p);
        minDistance = Math.min(d, minDistance);
      }
      return minDistance;
    }
    return 100000;
  }

  getNeighbours(p, distance) {
    let res = [];
    const x = Math.round(p.x / this.size) * this.size;
    const y = Math.round(p.y / this.size) * this.size;
    const cells = distance / this.size;
    for (let i = x - distance; i <= x + distance; i++) {
      for (let j = y - distance; j <= y + distance; j++) {
        const points = this.get({ x: i, y: j });
        if (points) {
          res = [...res, ...points];
        }
      }
    }
    return res;
  }

  findIntersect(center, radius, origin, direction) {
    const _vector = center.clone().sub(origin);
    const tca = _vector.dot(direction);
    const d2 = _vector.dot(_vector) - tca * tca;
    const radius2 = radius * radius;

    if (d2 > radius2) return null;

    const thc = Math.sqrt(radius2 - d2);

    // t0 = first intersect point - entrance on front of sphere
    const t0 = tca - thc;

    // t1 = second intersect point - exit point on back of sphere
    const t1 = tca + thc;

    // test to see if both t0 and t1 are behind the ray - if so, return null
    if (t0 < 0 && t1 < 0) return null;

    // test to see if t0 is behind the ray:
    // if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
    // in order to always return an intersect point that is in front of the ray.
    if (t0 < 0) return t1; //this.at(t1, target);

    // else t0 is in front of the ray, so return the first collision point scaled by t0
    return t0; //this.at(t0, target);
  }

  getCellsCloseToRay(origin, destination, radius) {
    const point = new Vector2();
    const v = new Vector2();
    let res = [];
    for (let [i, value] of this.points.entries()) {
      const [x, y] = i.split(":").map((v) => parseFloat(v));
      point.set(x, y);
      const d = distToSegment(point, origin, destination);
      if (d <= radius) {
        res.push(value);
      }
    }
    return res.flat();
  }

  getPointsFromRay(origin, destination, radius) {
    const res = this.getCellsCloseToRay(origin, destination, radius);
    return res.map((v) => v.position);
  }

  getClosestFromRay(origin, destination, radius) {
    let distance = 100000;
    let closest = null;
    const potentialPoints = this.getCellsCloseToRay(
      origin,
      destination,
      2 * radius
    );
    for (const point of potentialPoints) {
      const direction = destination.clone().sub(origin).normalize();
      const d = this.findIntersect(
        point.position,
        point.radius + radius,
        origin,
        direction
      ); // ray.distanceToPoint(point.position);
      if (d && d < distance) {
        distance = d;
        closest = point;
      }
    }
    if (closest) {
      return distance;
    } else {
      return null;
    }
  }

  hash(p) {
    const x = Math.floor(p.x / this.size) * this.size;
    const y = Math.floor(p.y / this.size) * this.size;
    return `${x}:${y}`;
  }

  getPoints() {
    return Array.from(this.points.values()).flat();
  }
}

export { Grid };
