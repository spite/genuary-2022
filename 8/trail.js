import {
  IcosahedronBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  Vector2,
  Color,
  Vector3,
} from "../third_party/three.module.js";
import { curl, generateNoiseFunction } from "../modules/curl.js";
import { MeshLine, MeshLineMaterial } from "../modules/MeshLine.js";
import { Easings } from "../modules/easings.js";
import { parabola, randomInRange } from "../modules/Maf.js";
import {
  warm,
  natural,
  natural2,
  circus,
  seaside,
} from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";

const gradient = new GradientLinear(natural);

const center = new Vector3(0, 0, 0);

class Trail {
  constructor(width = 1) {
    this.fn = generateNoiseFunction();
    this.radFn = generateNoiseFunction();

    this.color = new Color();

    this.colorOffset = Math.random() * Math.PI * 2;
    this.colorTime = Math.random() * Math.PI * 2;
    this.colorSpeed = randomInRange(0.9, 1.1);

    this.source = new Mesh(
      new IcosahedronBufferGeometry(0.1 * width, 10),
      new MeshBasicMaterial({ color: this.color })
    );

    this.trail = new MeshLine();
    this.trail.widthCallback = (t) => {
      return Easings.OutCubic(t);
    };
    const lineMaterial = new MeshLineMaterial({
      lineWidth: 0.275 * width,
      color: this.color,
      sizeAttenuation: true,
      // wireframe: true,
      resolution: new Vector2(window.innerWidth, window.innerHeight),
    });
    this.trailMesh = new Mesh(this.trail, lineMaterial);

    this.trailLength = 2000;
    this.points = [];
    for (let i = 0; i < this.trailLength; i++) {
      this.points.push(new Vector3(0, 0, 0));
    }
    this.trail.setPoints(this.points);

    this.prevTime = 0;
    this.w = 0;
  }

  setSize(w, h) {
    this.trailMesh.material.uniforms.resolution.value.set(w, h);
  }

  update(t) {
    const ct = t / 1000;
    const dt = ct - this.prevTime;
    this.colorTime += dt / 10;
    const c = gradient.getAt(
      0.5 + 0.5 * Math.cos(this.colorTime * this.colorSpeed + this.colorOffset)
    );
    this.color.copy(c);
    this.source.material.color.copy(c);

    const steps = 10;

    this.w += 1;
    const e = 0.0001;
    for (let i = 0; i < steps; i++) {
      const t = this.prevTime + (dt * i) / steps;
      const r = 0.5 + 0.5 * Math.sin(t / 1);
      const p = new Vector3(t, 0, 0).multiplyScalar(2);
      const n = curl(p, this.fn);
      n.normalize().multiplyScalar(0.1 + 0.9 * r);
      n.x += randomInRange(-e, e);
      n.y += randomInRange(-e, e);
      n.z += randomInRange(-e, e);
      const f = n.clone().copy(n);
      this.source.position.copy(f);

      this.points.shift();
      this.points.push(f);
    }

    this.prevTime = ct;

    const f = this.w / this.trailLength;
    this.trail.setPoints(this.points, (p) => {
      return parabola(p, 1);
    });
  }
}

export { Trail };
