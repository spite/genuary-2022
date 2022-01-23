import {
  RawShaderMaterial,
  RGBAFormat,
  UnsignedByteType,
  LinearFilter,
  ClampToEdgeWrapping,
  Vector2,
  GLSL3,
} from "../third_party/three.module.js";
import { getFBO } from "../modules/fbo.js";
import { shader as orthoVertexShader } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as vignette } from "../shaders/vignette.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as screen } from "../shaders/screen.js";
import { shader as chromaticAberration } from "../shaders/chromatic-aberration.js";
import { BloomPass } from "../modules/bloomPass.js";
import { gammaCorrect, levelRange, finalLevels } from "../shaders/levels.js";

const finalFragmentShader = `
precision highp float;

uniform vec2 resolution;
uniform sampler2D inputTexture;

uniform sampler2D blur0Texture;
uniform sampler2D blur1Texture;
uniform sampler2D blur2Texture;
uniform sampler2D blur3Texture;
uniform sampler2D blur4Texture;

uniform float vignetteBoost;
uniform float vignetteReduction;

uniform float time;

in vec2 vUv;

out vec4 fragColor;

${vignette}

${noise}

${screen}

${gammaCorrect}
${levelRange}
${finalLevels}


void main() {
  vec4 b0 = texture(blur0Texture, vUv);
  vec4 b1 = texture(blur1Texture, vUv);
  vec4 b2 = texture(blur2Texture, vUv);
  vec4 b3 = texture(blur3Texture, vUv);
  vec4 b4 = texture(blur4Texture, vUv);
  
  vec4 color = texture(inputTexture, vUv);

  vec4 b =  b0 / 40.;
  b +=  2.*b1 / 40.;
  b +=  4.*b2 / 40.;
  b +=  8.*b3 / 40.;
  b +=  16.*b4 / 40.;

  fragColor = color;

  fragColor = clamp(screen(fragColor, b / 2., 1.), vec4(0.), vec4(1.));
  fragColor *= vignette(vUv, vignetteBoost, vignetteReduction);
  fragColor += .01 * noise(gl_FragCoord.xy + vec2(time, 0.));
  fragColor.rgb = finalLevels(fragColor.rgb, vec3(0.), vec3(1.2), vec3(1.));
}
`;

const rgbFragmentShader = `precision highp float;

in vec2 vUv;

uniform sampler2D inputTexture;

out vec4 color;

${chromaticAberration}

void main() {
  vec2 size = vec2(textureSize(inputTexture, 0));
  vec4 c = chromaticAberration(inputTexture, vUv, 100. / length(size), (vUv - .5));
  color = c;
}`;

class Post {
  constructor(renderer, params = {}) {
    this.renderer = renderer;

    const supersampled = true;

    this.colorFBO = getFBO(1, 1, {}, supersampled);

    this.rgbShader = new RawShaderMaterial({
      uniforms: {
        inputTexture: { value: this.colorFBO.texture },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: rgbFragmentShader,
      glslVersion: GLSL3,
    });
    this.rgbPass = new ShaderPass(this.rgbShader, {
      format: RGBAFormat,
      type: UnsignedByteType,
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      wrapS: ClampToEdgeWrapping,
      wrapT: ClampToEdgeWrapping,
    });

    this.finalShader = new RawShaderMaterial({
      uniforms: {
        resolution: { value: new Vector2(1, 1) },
        vignetteBoost: { value: params.vignetteBoost || 1.1 },
        vignetteReduction: { value: params.vignetteReduction || 0.5 },
        inputTexture: { value: this.rgbPass.texture },
        blur0Texture: { value: null },
        blur1Texture: { value: null },
        blur2Texture: { value: null },
        blur3Texture: { value: null },
        blur4Texture: { value: null },
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

    this.bloomPass = new BloomPass(1, 5);
  }

  setSize(w, h) {
    this.colorFBO.setSize(w, h);
    this.finalPass.setSize(w, h);
    this.finalShader.uniforms.resolution.value.set(w, h);
    this.rgbPass.setSize(w, h);
    this.bloomPass.setSize(w, h);
  }

  render(scene, camera) {
    this.renderer.setRenderTarget(this.colorFBO);
    this.renderer.render(scene, camera, this.colorFBO);
    this.renderer.setRenderTarget(null);

    this.bloomPass.source = this.colorFBO.texture;
    this.bloomPass.render(this.renderer);

    this.finalPass.shader.uniforms.blur0Texture.value =
      this.bloomPass.blurPasses[0].texture;
    this.finalPass.shader.uniforms.blur1Texture.value =
      this.bloomPass.blurPasses[1].texture;
    this.finalPass.shader.uniforms.blur2Texture.value =
      this.bloomPass.blurPasses[2].texture;
    this.finalPass.shader.uniforms.blur3Texture.value =
      this.bloomPass.blurPasses[3].texture;
    this.finalPass.shader.uniforms.blur4Texture.value =
      this.bloomPass.blurPasses[4].texture;
    this.finalPass.shader.uniforms.time.value = Math.random() * 100000;

    this.rgbPass.render(this.renderer);
    this.finalPass.render(this.renderer, true);
  }
}

export { Post };
