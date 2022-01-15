import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import {
  DoubleSide,
  GLSL3,
  IcosahedronBufferGeometry,
  InstancedMesh,
  Mesh,
  MeshNormalMaterial,
  Object3D,
  RawShaderMaterial,
  TorusBufferGeometry,
  Vector3,
  Vector4,
  DynamicDrawUsage,
  TextureLoader,
  BufferGeometry,
  BufferAttribute,
  PlaneBufferGeometry,
  Group,
} from "../third_party/three.module.js";
import { clamp, mod, randomInRange } from "../modules/Maf.js";
import { Post } from "./post.js";
// import { capture } from "../modules/capture.js";

const post = new Post(renderer);

const SPHERES = 100;
const RINGRADIUS = 0.02;

const mainVs = `precision highp float;

in vec3 position;
in vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

out vec4 vPosition;
out vec3 vNormal;
out vec4 vEyePosition;

void main() {
  vNormal = normalMatrix * normal;
  vPosition = vec4(position, 1.);
  vEyePosition = modelViewMatrix *  vPosition;
  gl_Position = projectionMatrix * vEyePosition;
}`;

const mainFs = `precision highp float;

out vec4 color;

uniform vec4 spheres[${SPHERES}];
uniform sampler2D matCapMap;

in vec4 vPosition;
in vec3 vNormal;
in vec4 vEyePosition;

vec2 matCapUV(in vec3 eye, in vec3 normal) {
  vec3 r = reflect(eye, normal);
  float m = 2.82842712474619 * sqrt(r.z + 1.0);
  vec2 vN = r.xy / m + .5;
  return vN;
}

void main() {
  for(int i=0; i<${SPHERES}; i++) {
    vec4 s = spheres[i];
    float d = length(normalize(vPosition.xyz) - normalize(s.xyz));
    if(d<s.w) {
      discard;
    }
  }

  vec3 normal = normalize(vNormal);
  vec2 vN = matCapUV(normalize(vEyePosition.xyz), normal);
  vec4 c = texture(matCapMap, vN);
  color = c;

  // color = vec4(.5 + .5 * vNormal, 1.);
}`;

const sphereVs = `precision highp float;

in vec3 position;
in vec3 normal;
in mat4 instanceMatrix;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

out vec4 vPosition;
out vec3 vNormal;
out vec4 vEyePosition;

void main() {
  vNormal = normalMatrix * normal;
  vPosition = instanceMatrix * vec4(position, 1.);
  vEyePosition = modelViewMatrix * vPosition;
  gl_Position = projectionMatrix * vEyePosition;
}`;

const sphereFs = `precision highp float;

out vec4 color;

uniform vec4 spheres[${SPHERES}];
uniform sampler2D matCapMap;

in vec4 vPosition;
in vec3 vNormal;
in vec4 vEyePosition;

vec2 matCapUV(in vec3 eye, in vec3 normal) {
  vec3 r = reflect(eye, normal);
  float m = 2.82842712474619 * sqrt(r.z + 1.0);
  vec2 vN = r.xy / m + .5;
  return vN;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec2 vN = matCapUV(normalize(vEyePosition.xyz), normal);
  vec4 c = texture(matCapMap, vN);
  color = c;

  // color = vec4(.5 + .5 * vNormal, 1.);
}`;

const ringVs = `precision highp float;

in vec3 position;
in vec3 normal;
in mat4 instanceMatrix;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

out vec4 vPosition;
out vec3 vNormal;
out vec4 vEyePosition;

#define PI 3.14159265359

// creates a quaternion out of an axis vector and a rotation angle.
vec4 quat(vec3 axis, float angle) {
  float halfAngle = angle / 2.;
  float s = sin( halfAngle );
  vec4 q = vec4(axis.x * s, axis.y * s, axis.z * s, cos( halfAngle ));
  return q;
}

// applies a quaternion q to a vec3 v. 
vec3 applyQuat( vec4 q, vec3 v ){ 
	return v + 2.0*cross(cross(v, q.xyz ) + q.w*v, q.xyz);
}

mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

mat3 lookAt(vec3 origin, vec3 target, float roll) {
  vec3 rr = vec3(sin(roll), cos(roll), 0.0);
  vec3 ww = normalize(target - origin);
  vec3 uu = normalize(cross(ww, rr));
  vec3 vv = normalize(cross(uu, ww));

  return mat3(uu, vv, ww);
}


void main() {
  mat4 m = instanceMatrix;
  float s = sqrt(m[0][0] * m[0][0] + m[0][1] * m[0][1] + m[0][2] * m[0][2]);

  vNormal = normalMatrix * normal;
  float a = position.x * 2. * PI;
  float b = position.y * 2. * PI;
  float r = 1.;
  float r2 = ${RINGRADIUS} / s;
  vec3 p = vec3(r * cos(a), r * sin(a), 0.);
  float e = .001;
  vec3 pp = vec3(r * cos(a-e), r * sin(a-e), 0.);
  // vec3 dir = normalize(vec3(cos(a + PI), sin(a + PI), 0.));
  vec3 dir = normalize(pp-p);
  vec3 tubeDir = r2 *  vec3(cos(b), sin(b), 0.);
  vec3 ppp = lookAt(pp, p, -a) * tubeDir;
  vNormal = normalMatrix * normalize((instanceMatrix * vec4(ppp, 0.)).xyz);
  p += ppp;

  vPosition = instanceMatrix * vec4(p, 1.);
  vEyePosition = modelViewMatrix *  vPosition;
  gl_Position = projectionMatrix * vEyePosition;
}`;

const ringFs = `precision highp float;

in vec4 vPosition;
in vec3 vNormal;
in vec4 vEyePosition;

uniform sampler2D matCapMap;

out vec4 color;

vec2 matCapUV(in vec3 eye, in vec3 normal) {
  vec3 r = reflect(eye, normal);
  float m = 2.82842712474619 * sqrt(r.z + 1.0);
  vec2 vN = r.xy / m + .5;
  return vN;
}

void main() {
  // color = vec4(.5 + .5 * vNormal, 1.);
  
  vec3 normal = normalize(vNormal);
  vec2 vN = matCapUV(normalize(vEyePosition.xyz), normal);
  vec4 c = texture(matCapMap, vN);
  color = c;
}`;

const sphereUniforms = [];

for (let i = 0; i < SPHERES; i++) {
  sphereUniforms.push(new Vector4());
}

const loader = new TextureLoader();
const matCap = loader.load("../assets/red-matcap.png");
const matCap2 = loader.load("../assets/black-matcap.png");

const mainMat = new RawShaderMaterial({
  uniforms: {
    spheres: { value: sphereUniforms },
    matCapMap: { value: matCap },
  },
  vertexShader: mainVs,
  fragmentShader: mainFs,
  glslVersion: GLSL3,
  side: DoubleSide,
});

const group = new Group();
scene.add(group);

const sphere = new Mesh(new IcosahedronBufferGeometry(1, 10), mainMat);
group.add(sphere);
const innerSphere = new Mesh(
  new IcosahedronBufferGeometry(1 - RINGRADIUS * 2, 10),
  mainMat
);
group.add(innerSphere);

const spheres = [];
const maxRadius = 0.5;

function getClosestDistance(sphere) {
  let m = 1000;
  for (const s of spheres) {
    if (s !== sphere) {
      const d = clamp(
        sphere.center.distanceTo(s.center) -
          s.radius -
          sphere.radius -
          1 * RINGRADIUS,
        0,
        10000
      );
      m = Math.min(m, d);
    }
  }
  return m;
}

const mat = new MeshNormalMaterial({ wireframe: !true });
const ringMat = new RawShaderMaterial({
  uniforms: {
    matCapMap: { value: matCap },
  },
  vertexShader: ringVs,
  fragmentShader: ringFs,
  glslVersion: GLSL3,
  side: DoubleSide,
  wireframe: !true,
});

const sphereGeo = new IcosahedronBufferGeometry(1, 10);
const sphereMat = new RawShaderMaterial({
  uniforms: {
    matCapMap: { value: matCap2 },
  },
  vertexShader: sphereVs,
  fragmentShader: sphereFs,
  glslVersion: GLSL3,
});
const spheresMesh = new InstancedMesh(sphereGeo, sphereMat, SPHERES);
spheresMesh.instanceMatrix.setUsage(DynamicDrawUsage);
group.add(spheresMesh);

class Sphere {
  constructor() {
    this.center = new Vector3();
    this.radius = 0;
    this.offset = randomInRange(0, 2 * Math.PI);
    this.speed = randomInRange(0.9, 1.1);
    this.random();
    this.alive = true;
  }

  random() {
    this.center.set(
      randomInRange(-1, 1),
      randomInRange(-1, 1),
      randomInRange(-1, 1)
    );
    this.center.normalize();
  }

  grow() {
    if (this.alive) {
      const closestDistance = clamp(getClosestDistance(this), 0, 0.01);
      this.radius += closestDistance;
      this.radius = clamp(this.radius, 0, maxRadius);
    } else {
      this.radius -= 0.01;
      if (this.radius < 0.001) {
        removeSphere(this);
      }
    }
    // this.mesh.position.copy(this.center);
    // this.mesh.scale.setScalar(clamp(this.radius - 0.05, 0, 100));
  }

  destroy() {
    this.alive = false;
    // this.mesh.geometry.dispose();
  }
}

for (let i = 0; i < SPHERES; i++) {
  spheres.push(new Sphere());
}

const SEGMENTS = 36 * 4;
const RADIAL = 4 * 4;
const ringGeo = new PlaneBufferGeometry(1, 1, SEGMENTS, RADIAL);
ringGeo.translate(0.5, 0.5, 0);
const ringMesh = new InstancedMesh(ringGeo, ringMat, SPHERES);
ringMesh.instanceMatrix.setUsage(DynamicDrawUsage);
group.add(ringMesh);

const controls = getControls();

function removeSphere(sphere) {
  for (let i = 0; i < spheres.length; i++) {
    if (spheres[i] === sphere) {
      spheres.splice(i, 1);
      removing = false;
      add();
      return;
    }
  }
}

let removing = false;
function remove() {
  if (spheres.length > 3) {
    // let biggest = -1;
    // let max = 0;
    // for (let i = 0; i < spheres.length; i++) {
    //   const s = spheres[i];
    //   if (s.radius > max) {
    //     biggest = i;
    //     max = s.radius;
    //   }
    // }
    // if (biggest !== -1) {
    //   spheres[biggest].destroy();
    // }
    removing = true;
    const id = Math.floor(Math.random() * (spheres.length / 2));
    spheres[id].destroy();
  }
}

function add() {
  if (spheres.length >= SPHERES) {
    return;
  }
  const s = new Sphere();
  while (getClosestDistance(s) <= 0) {
    // console.log("retry");
    s.random();
  }
  // console.log(s);
  spheres.push(s);
}

const dummy = new Object3D();
const dummy2 = new Object3D();
const center = new Vector3(0, 0, 0);
const up = new Vector3(0, 1, 0);
const oscillation = new Vector3();

let frames = 0;

function render() {
  frames++;
  group.rotation.y += 0.01;
  // if (frames % 10 === 0) {
  // if (!removing) {
  // console.log("remove", spheres.length);
  remove();
  // }
  // }

  const time = performance.now() / 200;
  for (let i = 0; i < sphereUniforms.length; i++) {
    if (i < spheres.length) {
      const s = spheres[i];
      sphereUniforms[i].set(s.center.x, s.center.y, s.center.z, s.radius);
      dummy.position.copy(s.center);
      let offset = 1 - Math.sqrt(1 - s.radius ** 2);
      dummy.position.setLength(1 - offset - RINGRADIUS * 1.1);
      dummy.scale.setScalar(s.radius);
      dummy.lookAt(center, s.position, up);

      dummy2.position.copy(s.center);
      oscillation
        .copy(dummy2.position)
        .normalize()
        .multiplyScalar(
          0.25 * (1 - s.radius) * Math.sin(time * s.speed + s.offset)
        );
      dummy2.position.add(oscillation);
      dummy2.scale.setScalar(clamp(s.radius - 0.05, 0, 100));
    } else {
      sphereUniforms[i].set(0, 0, 0, 0);
      dummy.position.set(0, 0, 0);
      dummy.scale.setScalar(0);
      dummy2.position.set(0, 0, 0);
      dummy2.scale.setScalar(0);
    }

    dummy.updateMatrix();
    ringMesh.setMatrixAt(i, dummy.matrix);

    dummy2.updateMatrix();
    spheresMesh.setMatrixAt(i, dummy2.matrix);
  }
  ringMesh.instanceMatrix.needsUpdate = true;
  spheresMesh.instanceMatrix.needsUpdate = true;

  for (const s of spheres) {
    s.grow();
  }
  post.render(scene, camera);
  renderer.setAnimationLoop(render);
}

renderer.setClearColor(0x202020, 1);

function myResize(w, h, dpr) {
  post.setSize(w * dpr, h * dpr);
}
addResize(myResize);

resize();
render();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
