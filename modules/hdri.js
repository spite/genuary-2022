import { FloatType, PMREMGenerator } from "../third_party/three.module.js";
import { RGBELoader } from "../third_party/RGBELoader.js";

async function initHdrEnv(filename, renderer) {
  return new Promise((resolve, reject) => {
    const pmremGenerator = new PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    new RGBELoader()
      .setDataType(FloatType)
      .setPath("../assets/")
      .load(filename, (texture) => {
        const radianceMap = pmremGenerator.fromEquirectangular(texture).texture;
        pmremGenerator.dispose();
        resolve(radianceMap);
      });
  });
}

export { initHdrEnv };
