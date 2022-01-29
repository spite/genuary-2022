class Rectangle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.aspectRatio = 1;
    this.area = 0;
  }

  grow() {
    const dw = this.aspectRatio;
    const dh = 1 / this.aspectRatio;
    this.w += dw;
    this.h += dh;
    this.x -= dw;
    this.y -= dh;
    this.area = this.w * this.h;
  }
}

class Packer {
  constructor() {
    this.maxArea = 20;
    this.rectangles = [];
    this.addRectangle();
  }

  addRectangle() {
    const r = new Rectangle();
    this.rectangles.push(r);
  }

  grow() {
    for (const r of this.rectangles) {
      if (r.area < this.maxArea) {
        r.grow();
      }
    }
  }
}

export { Packer };
