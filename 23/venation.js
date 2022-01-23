import { Vector3 } from "../third_party/three.module.js";
import { Grid } from "./grid-2d.js";
import { randomInRange } from "../modules/Maf.js";

class Node {
  constructor(position) {
    this.position = position;
    this.sources = [];
    this.dir = new Vector3();
    this.toDir = new Vector3();
    this.active = true;
    this.parent = null;
    this.thickness = 1;
    this.wobble = 0.001;
  }

  grow() {
    const n = new Node(this.position.clone());
    n.position.x += randomInRange(-this.wobble, this.wobble);
    n.position.y += randomInRange(-this.wobble, this.wobble);
    n.position.z += randomInRange(-this.wobble, this.wobble);
    n.parent = this;
    this.thicken();
    n.position.add(this.dir);
    return n;
  }

  thicken() {
    this.thickness++;
    if (this.parent) {
      this.parent.thicken();
    }
  }
}

class Auxin {
  constructor(position) {
    this.position = position;
    this.reached = false;
    this.closestNode = null;
    this.closestDistance = 0;
  }
}

class Venation {
  constructor(sources) {
    this.sources = [];
    this.grid = new Grid(10);
    for (const source of sources) {
      const auxin = new Auxin(source);
      this.sources.push(auxin);
    }
    this.nodes = [];
    this.activeNodes = [];
    this.leaves = [];
    this.closestDistance = 0.2;
    this.minDistance = 0.005;
    this.starvedProbability = 0;
  }

  addSeed(position) {
    const node = new Node(position);
    this.activeNodes.push(node);
    // this.grid.add(node.position, node);
  }

  step() {
    const v = new Vector3();
    const dir = new Vector3(0, 0, 0);

    // reset lists.
    for (let node of this.activeNodes) {
      node.sources = [];
      node.toDir.set(0, 0);
    }

    // iterate over all sources.
    for (let source of this.sources) {
      //const neighbours = this.grid.getNeighbours(source.position, 50);
      let closestNode = null;
      let closestDistance = this.closestDistance; //Number.MAX_SAFE_INTEGER;
      for (let node of this.activeNodes) {
        const d = node.position.distanceTo(source.position);
        // if too close, delete source
        if (d < this.minDistance) {
          source.reached = true;
          break;
        } else if (d < closestDistance) {
          closestNode = node;
          closestDistance = d;
        }
      }
      source.closestNode = closestNode;
      if (closestNode) {
        closestNode.sources.push(source);
        dir.copy(source.position).sub(closestNode.position);
        const l = dir.length();
        // dir.normalize();
        // dir.multiplyScalar(2); //1  / l);
        closestNode.toDir.add(dir);
      }
    }

    // remove all reached auxins.
    for (let i = this.sources.length - 1; i >= 0; i--) {
      if (this.sources[i].reached) {
        const leaf = this.sources.splice(i, 1);
        const d = 0.05;
        leaf[0].position.x += randomInRange(-d, d);
        leaf[0].position.y += randomInRange(-d, d);
        leaf[0].position.z += randomInRange(-d, d);
        this.leaves.push(leaf[0]);
      }
    }

    // deactivate nodes that won't reach any auxins.
    for (let i = this.activeNodes.length - 1; i >= 0; i--) {
      const starved =
        Math.random() + this.activeNodes[i].sources.length <
        this.starvedProbability;
      if (this.activeNodes[i].sources.length === 0 || starved) {
        const n = this.activeNodes.splice(i, 1);
        this.nodes.push(n[0]);
      }
    }

    // grow nodes.
    for (let node of this.activeNodes) {
      if (node.sources.length > 0) {
        node.toDir.normalize(); //multiplyScalar(1 / node.sources.length).normalize();
        node.toDir.multiplyScalar(0.005);
        // node.dir.lerp(node.toDir, 0.5);
        node.dir.copy(node.toDir);
        const n = node.grow();
        this.activeNodes.push(n);
      }
    }

    // if (this.activeNodes.length === 0) {
    //   this.sources = [];
    // }
  }
}

export { Venation, Node };
