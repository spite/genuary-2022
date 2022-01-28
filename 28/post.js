import {
  RawShaderMaterial,
  RGBAFormat,
  UnsignedByteType,
  LinearFilter,
  ClampToEdgeWrapping,
  Vector2,
  GLSL3,
} from "../third_party/three.module.js";
import { shader as orthoVertexShader } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as vignette } from "../shaders/vignette.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as screen } from "../shaders/screen.js";
import { BloomPass } from "../modules/bloomPass.js";
import { shader as fxaa } from "../shaders/fxaa.js";

const finalFragmentShader = `
precision highp float;

uniform vec2 resolution;
uniform sampler2D inputTexture;

uniform float vignetteBoost;
uniform float vignetteReduction;

uniform float time;

in vec2 vUv;

out vec4 fragColor;

${vignette}

${noise}

${screen}

void main() {
  vec4 color = texture(inputTexture, vUv);
  fragColor = color;
  fragColor *= vignette(vUv, vignetteBoost, vignetteReduction);
  fragColor += .01 * noise(gl_FragCoord.xy + vec2(time, 0.));
}
`;

const colorFragmentShader = `precision highp float;

uniform sampler2D inputTexture;

in vec2 vUv;

out vec4 fragColor;

${fxaa}

void main() {
  vec2 uv = .8 * (vUv - .5) + .5;
  fragColor = fxaa(inputTexture, vUv);

}`;

class Post {
  constructor(renderer, params = {}) {
    this.renderer = renderer;

    this.finalShader = new RawShaderMaterial({
      uniforms: {
        resolution: { value: new Vector2(1, 1) },
        vignetteBoost: { value: params.vignetteBoost || 1 },
        vignetteReduction: { value: params.vignetteReduction || 0.2 },
        inputTexture: { value: null },
        time: { value: 0 },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: finalFragmentShader,
      glslVersion: GLSL3,
    });
    this.finalPass = new ShaderPass(this.finalShader, {
      format: RGBAFormat,
      type: UnsignedByteType,
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      wrapS: ClampToEdgeWrapping,
      wrapT: ClampToEdgeWrapping,
    });

    const rgbShader = new RawShaderMaterial({
      uniforms: {
        inputTexture: { value: this.finalPass.texture },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: colorFragmentShader,
      glslVersion: GLSL3,
    });
    this.rgbPass = new ShaderPass(rgbShader);
  }

  setSize(w0, h0, dpr) {
    const w = w0 * dpr;
    const h = h0 * dpr;
    this.finalPass.setSize(w, h);
    this.finalShader.uniforms.resolution.value.set(w, h);
    this.rgbPass.setSize(w, h);
  }

  render(src) {
    this.finalPass.shader.uniforms.inputTexture.value = src;
    this.finalPass.shader.uniforms.time.value = Math.random() * 100000;

    this.finalPass.render(this.renderer);

    this.rgbPass.render(this.renderer, true);
  }
}

export { Post };
