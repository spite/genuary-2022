import { GLSL3, RawShaderMaterial } from "../third_party/three.module.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in mat4 instanceMatrix;
in vec3 instanceColor;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec3 color;
out vec2 vUv;

void main() {
  vUv = uv;

  color = abs(normal);
  color.y *= instanceColor.r;

  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.);
}`;

const fragmentShader = `precision highp float;

in vec3 color;
in vec2 vUv;

out vec4 fragColor;

void main() {
  fragColor = vec4(color, 1.);
  float d = length(vUv - .5);
  fragColor.a = 1. - d;//1. - .25 * d;
}`;

const colorShader = new RawShaderMaterial({
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
});

export { colorShader };
