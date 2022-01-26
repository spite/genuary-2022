import { randomInRange, TAU } from "../modules/Maf.js";
import {
  Mesh,
  RawShaderMaterial,
  BufferGeometry,
  InstancedBufferAttribute,
  GLSL3,
  BufferAttribute,
  InstancedMesh,
  PlaneBufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  InstancedBufferGeometry,
  TextureLoader,
} from "../third_party/three.module.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec3 from;
in float size;
in vec3 color;
in float angle;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec3 vColor;
out vec2 vUv;

#define PI 3.14159265359

float atan2(in float y, in float x) {
  bool s = (abs(x) > abs(y));
  return mix(PI/2.0 - atan(x,y), atan(y,x), s);
}

vec2 rotate(vec2 v, float inc) {
  float r = length(v);
  float a = atan(v.y, v.x);
	float s = sin(a+inc);
	float c = cos(a+inc);
	return vec2(r * c, r * s);
}

void main() {
  vColor = color;
  vUv = (rotate(position.xy, angle) + 1.) / 2.;
  vec4 p = vec4(from, 1.);
  gl_Position = projectionMatrix * (modelViewMatrix * p + vec4(position * size / 100., 1.));
}
`;

const fragmentShader = `precision highp float;

in vec3 vColor;
in vec2 vUv;

uniform sampler2D sprite;

out vec4 color;

void main() {
//  color = vec4(vUv, 0., 1.);
  // color = vec4(vColor, 1.);
  vec4 t = texture(sprite, vUv);
  if(t.a < .5) {
    discard;
  }
  color = vec4(vColor * (.5 + .5 * t.a), t.a);
}`;

const loader = new TextureLoader();
const sprite = loader.load("./spot.png");

const material = new RawShaderMaterial({
  uniforms: {
    sprite: { value: sprite },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  transparent: true,
  side: DoubleSide,
  // wireframe: true,
});

function getMesh(points, sizes = null, colors = null, angles = null) {
  const count = points.length;
  const geometry = new InstancedBufferGeometry();
  geometry.instanceCount = count;

  const positions = [];
  const d = 1;
  positions.push(-d, -d, 0);
  positions.push(d, -d, 0);
  positions.push(-d, d, 0);

  positions.push(d, -d, 0);
  positions.push(d, d, 0);
  positions.push(-d, d, 0);

  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));

  const fromData = new Float32Array(count * 3);
  const sizeData = new Float32Array(count);
  const angleData = new Float32Array(count);
  const colorData = new Float32Array(count * 3);

  let ptr = 0;
  for (let i = 0; i < points.length; i++) {
    fromData[ptr] = points[i].x;
    fromData[ptr + 1] = points[i].y;
    fromData[ptr + 2] = points[i].z;

    sizeData[ptr / 3] = sizes ? sizes[ptr / 3] : randomInRange(0.8, 1.4);

    angleData[ptr / 3] = angles ? angles[ptr / 3] : randomInRange(0, TAU);

    colorData[ptr] = colors ? colors[i].r : 1;
    colorData[ptr + 1] = colors ? colors[i].g : 1;
    colorData[ptr + 2] = colors ? colors[i].b : 1;
    ptr += 3;
  }

  geometry.setAttribute("from", new InstancedBufferAttribute(fromData, 3));
  geometry.setAttribute("size", new InstancedBufferAttribute(sizeData, 1));
  geometry.setAttribute("angle", new InstancedBufferAttribute(angleData, 1));
  geometry.setAttribute("color", new InstancedBufferAttribute(colorData, 3));

  const mesh = new Mesh(geometry, material);
  return mesh;
}

export { getMesh };
