import { randomInRange } from "../modules/Maf.js";

class Rectangle {
  constructor(parent) {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.aspectRatio = randomInRange(0.8, 1.2);
    this.area = 0;
    this.frozen = false;
    this.parent = parent;
    this.color = 0.5 + 0.5 * Math.random();
  }

  grow() {
    if (this.frozen) {
      return;
    }
    const dw = this.aspectRatio;
    const dh = 1 / this.aspectRatio;
    this.x -= dw;
    this.y -= dh;
    this.w += 2 * dw;
    this.h += 2 * dh;
    this.area = this.w * this.h;
    this.height = this.area / 10;
  }

  overlaps(b, m = 0) {
    const a = this;

    const aRtB = a.x > b.x + b.w + m;
    const aLtB = a.x + a.w + m < b.x;
    const aUpB = a.y + a.h + m < b.y;
    const aDnB = a.y > b.y + b.h + m;
    return !(aRtB || aLtB || aUpB || aDnB);
  }

  freeze() {
    if (!this.frozen) {
      this.parent.onFreeze();
    }
    this.frozen = true;
  }
}

class Packer {
  constructor(fn, map) {
    this.maxArea = 300;
    this.rectangles = [];
    this.onFreezeCb = fn;
    this.map = map;
  }

  checkMap(x, y) {
    if (!this.map) return true;

    const pos = (Math.round(y) * this.map.width + Math.round(x)) * 4;
    const v = this.map.data[pos];
    return v > 128;
  }

  addRectangle() {
    const r = new Rectangle(this);
    let tries = 0;
    let valid = false;
    const margin = 0;
    do {
      r.x = randomInRange(-200, 200);
      r.y = randomInRange(-200, 200);
      const available = this.checkMap(r.x + 256, r.y + 256);
      const overlaps = this.checkOverlapping(r, margin);
      valid = available && !overlaps;
      tries++;
    } while (!valid && tries < 300);
    if (valid) {
      this.rectangles.push(r);
    }
  }

  onFreeze() {
    if (this.onFreezeCb) {
      this.onFreezeCb(this);
    }
  }

  checkOverlapping(rect) {
    for (const r of this.rectangles) {
      if (r !== rect) {
        if (rect.overlaps(r)) {
          return true;
        }
      }
    }
    return false;
  }

  grow() {
    for (const r of this.rectangles) {
      r.grow();
      if (this.checkOverlapping(r)) {
        r.freeze();
      }
      if (r.area > this.maxArea) {
        r.freeze();
      }
    }
  }

  get done() {
    for (const r of this.rectangles) {
      if (!r.frozen) return false;
    }
    return true;
  }
}

export { Packer };
