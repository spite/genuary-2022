import {
  Scene,
  Points,
  RawShaderMaterial,
  RGBAFormat,
  AdditiveBlending,
  FloatType,
  GLSL3,
} from "../third_party/three.module.js";
import { ShaderPass } from "./ShaderPass.js";
import { getFBO } from "./fbo.js";

const scene = new Scene();

const calcBokeh = `
float random(vec2 co, float time) {
  return fract(sin(dot(co, vec2(12.9898, 78.233)) * time) * 43758.5453) * 2.0 - 1.0;
}

#define PI 3.14159265359

vec3 randomSpherePoint(vec3 rand) {
  float ang1 = (rand.x + 1.0) * PI; // [-1..1) -> [0..2*PI)
  float u = rand.y; // [-1..1), cos and acos(2v-1) cancel each other out, so we arrive at [-1..1)
  float u2 = u * u;
  float sqrt1MinusU2 = sqrt(1.0 - u2);
  float x = sqrt1MinusU2 * cos(ang1);
  float y = sqrt1MinusU2 * sin(ang1);
  float z = u;
  return vec3(x, y, z);
}

vec2 randomCirclePoint(vec2 rand) {
  float r = sqrt(rand.x);
  float theta = rand.y * 2. * PI;
  float x = r * cos(theta);
  float y = r * sin(theta); 
  return vec2(x, y);
}

// https://www.shadertoy.com/view/4djSRW

vec4 hash44(vec4 p4) {
  p4 = fract(p4  * vec4(.1031, .1030, .0973, .1099));
    p4 += dot(p4, p4.wzxy+33.33);
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);
}

vec3 calcDir(vec3 position) {
  vec4 rand = hash44(vec4(100.*position.xyz+vec3(seed),100.*time));
  //vec3 dir = normalize(randomSpherePoint(rand));
  vec2 dir = randomCirclePoint(rand.xy);
  float dist = -position.z;
  float d = abs(focalDistance-dist);
  float rd = random(position.xz,time);
  float r = (size / dist + dofRange * pow(d, dofStrength));
  r = max(size / dist,r);
  return vec3(dir.xy, r);  
}
`;

const particleVS = `
precision highp float;

in vec3 position;
in float size;
in vec3 color;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float time;
uniform float seed;
uniform vec3 cameraPos;

uniform float focalDistance;
uniform float dofStrength;
uniform float dofRange;
uniform float iso;

out float vOpacity;
out vec3 vColor;

${calcBokeh}

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vec3 res = calcDir(mvPosition.xyz);
  vec2 dir = res.xy;
  float r = res.z;

  vOpacity = (2.-pow(length(dir.xy),r));
  vColor = color;
  vColor *= iso;
  vColor *= vOpacity;
  //vColor = 1.-vec3((mvPosition.w-.1)/(1000.-.1)) ;
  vColor = clamp(vColor, vec3(0.), vColor);

  mvPosition.xy += dir.xy * r;
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 1.;// + r;
 
}
`;

const linesVS = `
precision highp float;

in vec3 position;
in vec3 to;
in float size;
in vec3 color;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float time;
uniform float seed;
uniform vec3 cameraPos;
uniform float iso;

uniform float focalDistance;
uniform float dofStrength;
uniform float dofRange;

out float vOpacity;
out vec3 vColor;

${calcBokeh}

void main() {
  float rr = .5 + .5 * random(position.xy + seed, time);
  vec3 p = mix(position, to, rr);
  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  vec3 res = calcDir(mvPosition.xyz);
  vec2 dir = res.xy;
  float r = res.z;

  vOpacity = (2.-pow(length(dir.xy),r));
  vColor = color;
  vColor *= iso;
  vColor *= vOpacity;
  //vColor = 1.-vec3((mvPosition.w-.1)/(1000.-.1)) ;
  vColor = clamp(vColor, vec3(0.), vColor);

  mvPosition.xy += dir.xy * r ;
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 1.;// + r;
}`;

const particleFS = `
precision highp float;

in float vOpacity;
in vec3 vColor;

out vec4 color;

void main() {
  color = vec4(vColor,1.);
}
`;

const finalVS = `
precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );
}`;

const finalFS = `
precision highp float;

uniform sampler2D colorTexture;
uniform float samples;
uniform float exposure;
uniform bool invert;

in vec2 vUv;

out vec4 fragColor;

// https://www.shadertoy.com/view/ttyXzt

void main() {
  vec4 c = texture(colorTexture, vUv);
  /*float gamma = 2.2;
  vec3 hdrColor = exposure * c.rgb / c.a;
  vec3 mapped = hdrColor / (hdrColor + vec3(1.0));
  mapped = pow(mapped, vec3(1.0 / gamma));*/

  // vignette to darken the corners
  vec2 uv = vUv - .5;
  vec3 color =c.rgb / samples;//c.a;
  //color *= c.a/samples;
  
	//color *= 1.-dot(uv,uv)*.8;

  // exposure and tonemap
  color *= exposure;
  color = 1.-exp(color*-2.);

  // gamma correction
  color = pow(color, vec3(.45));

  // make it pop
  color = smoothstep(.02,.98,color);
  
  if(invert) {
    fragColor = vec4(1. - color, 1.);
  } else {
    fragColor = vec4(color, 1.);
  }
 // fragColor = vec4(c.a);
}
  `;

function resize(w, h) {}

class DOFRenderer {
  constructor(renderer) {
    this.acumSamples = 0;
    this.maxSamples = 1024;
    this.samples = 5;
    this.renderer = renderer;
    this.renderer.setClearColor(0, 0);
    this.scene = new Scene();
    this.colorFBO = getFBO(1, 1, { format: RGBAFormat, type: FloatType });
    this.finalShader = new RawShaderMaterial({
      uniforms: {
        colorTexture: { value: this.colorFBO.texture },
        samples: { value: 0 },
        exposure: { value: 0 },
        invert: { value: false },
      },
      vertexShader: finalVS,
      fragmentShader: finalFS,
      glslVersion: GLSL3,
    });
    this.finalPass = new ShaderPass(this.finalShader, 1, 1);
    this.material = new RawShaderMaterial({
      uniforms: {
        time: { value: 0 },
        focalDistance: { value: 100 },
        dofStrength: { value: 1.5 },
        dofRange: { value: 0.01 },
        iso: { value: 1 },
      },
      depthTest: false,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexShader: particleVS,
      fragmentShader: particleFS,
      transparent: true,
      glslVersion: GLSL3,
    });

    this.lineMaterial = new RawShaderMaterial({
      uniforms: {
        time: { value: 0 },
        focalDistance: { value: 100 },
        dofStrength: { value: 1.5 },
        dofRange: { value: 0.01 },
        iso: { value: 1 },
      },
      depthTest: false,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexShader: linesVS,
      fragmentShader: particleFS,
      transparent: true,
      glslVersion: GLSL3,
    });
    this.setParams({
      exposure: 1,
      iso: 0.1,
      focalDistance: 9.6,
      dofRange: 0.01,
      dofStrength: 1.5,
    });
  }

  addPoints(geometry) {
    const pointMesh = new Points(geometry, this.material);
    this.scene.add(pointMesh);
    return pointMesh;
  }

  addLines(geometry) {
    const lineMesh = new Points(geometry, this.lineMaterial);
    this.scene.add(lineMesh);
    return lineMesh;
  }

  render(camera) {
    if (this.acumSamples > this.maxSamples) {
      return;
    }
    for (let j = 0; j < this.samples; j++) {
      this.material.uniforms.time.value = Math.random(); //0.000001 * performance.now();
      this.lineMaterial.uniforms.time.value = Math.random(); //0.000001 * performance.now();
      this.finalPass.shader.uniforms.samples.value = this.acumSamples;
      this.renderer.setRenderTarget(this.colorFBO);
      //this.renderer.clearDepth();
      this.renderer.render(this.scene, camera);
      this.renderer.setRenderTarget(null);
      this.finalPass.render(this.renderer, true);
      this.acumSamples++;
    }
  }

  setParams(params) {
    const keys = Object.keys(params);
    for (const key of keys) {
      const value = params[key];
      if (key === "exposure") {
        this.finalShader.uniforms.exposure.value = params.exposure;
      } else {
        this.material.uniforms[key].value = value;
        this.lineMaterial.uniforms[key].value = value;
      }
    }
  }

  setSize(w, h) {
    this.colorFBO.setSize(w, h);
    this.finalPass.setSize(w, h);
  }

  reset() {
    this.acumSamples = 0;
    this.renderer.setRenderTarget(this.colorFBO);
    this.renderer.clear();
  }

  clear() {
    while (this.scene.children.length) {
      let m = this.scene.children[0];
      this.scene.remove(m);
      m.geometry.dispose();
      m = null;
    }
  }
}

export { DOFRenderer };
