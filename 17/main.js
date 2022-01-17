import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import {
  Vector3,
  TorusKnotBufferGeometry,
  TextureLoader,
  RawShaderMaterial,
  Vector2,
  GLSL3,
  Mesh,
  Group,
  TorusBufferGeometry,
} from "../third_party/three.module.js";
import { PI, randomInRange, TAU } from "../modules/Maf.js";
import { shader as parabola } from "../shaders/parabola.js";
import { shader as screen } from "../shaders/screen.js";
import { Post } from "./post.js";
import { Curves } from "../third_party/CurveExtras.js";
import { ParametricGeometries } from "../third_party/ParametricGeometries.js";

const controls = getControls();

const group = new Group();

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;
uniform float time;
uniform float offset;

out vec3 vPosition;
out vec2 vUv;
out float vDepth;
out float vRim;
out vec2 vN;

#define PI 3.1415926535897932384626433832795
#define TAU (2.*PI)

${parabola}

void main() {
  vUv = uv;
  vec4 p = vec4(position ,1.);
  vec4 mvPosition = modelViewMatrix * p;
  gl_Position = projectionMatrix * mvPosition;
  vec3 e = normalize( mvPosition.xyz);
  vec3 n = normalize( normalMatrix * normal );
  vRim = pow(abs(dot(e,n)),2.);
  vDepth = 1.5-20.*abs(gl_Position.z);
  vec3 r = reflect( e, n );
  float m = 2.82842712474619 * sqrt( r.z+1.0 );
  vN = r.xy / m + .5;
}
`;

const fragmentShader = `precision highp float;

uniform float time;
uniform float offset;
uniform float speed;
uniform sampler2D matCap;
uniform vec2 scale;

in vec2 vUv;
in float vDepth;
in float vRim;
in vec2 vN;

out vec4 fragColor;

#define PI 3.1415926535897932384626433832795
#define TAU (2.*PI)

${parabola}

${screen}

float v(vec2 uv, float offset, float t, float speed){
  float l = 20.;
  float o = .05 + .95*parabola(mod(1.*uv.x+1.*t+offset+speed*time,1.),l);
  return o;
}

vec3 color1 = vec3(69.,91.,105.)/255.;
vec3 color2 = vec3(249.,122.,77.)/255.;
vec3 color3 = vec3(195.,58.,78.)/255.;

void main(){
  vec2 uv = floor(vUv * scale)/scale;
  vec2 uv2 = mod(vUv*scale*vec2(1.,3.),1.);
  float i = floor(mod(vUv.y*scale.y*3.,3.));
  float e = 1./3.;
  float t = 2.*time/3.;
  float o1 = v(uv, 0., t,1.);
  float o2 = v(uv, e, t,2.);
  float o3 = v(uv, -e, t,3.);
  float stripe1 = .5 +.5 * sin(5.*uv.y*TAU+2.*sin(3.*vUv.x*TAU+4.*time*TAU)-3.*time*TAU);
  float stripe2 = .5 +.5 * sin(5.*uv.y*TAU+4.*sin(9.*vUv.x*TAU+4.*time*TAU)-3.*time*TAU+.5*e*TAU);
  float stripe = stripe1+stripe2;
  float vv = 1.-.95*smoothstep(.25,.75,stripe);  
  vec3 color = vRim*vv*(o1*color1+o2*color2+o3*color3)/1.;
  if(i==0.) color.yz *= 0.;
  if(i==1.) color.xz *= 0.;
  if(i==2.) color.xy *= 0.;
  float d = smoothstep(.25,.75,1.-1.*length(uv2-.5));
  fragColor = vec4(2.*color*d/1.,1.);
  float b = texture(matCap,vN).r/3.;
  fragColor = screen(fragColor, vec4(b), .5);
}`;

const post = new Post(renderer);

function generateTorusKnot(p, q, tx = 1, ty = 1) {
  return () => {
    mat.uniforms.scale.value.x = 480 * tx;
    mat.uniforms.scale.value.y = 30 * ty;
    const geo = new TorusKnotBufferGeometry(0.5, 0.15, 200, 36, p, q);
    geo.scale(0.4, 0.4, 0.4);
    return geo;
  };
}

function generateTorus(tx = 1, ty = 1) {
  return () => {
    mat.uniforms.scale.value.x = 480 * tx;
    mat.uniforms.scale.value.y = 30 * ty;
    const geo = new TorusBufferGeometry(0.5, 0.15, 36, 200);
    geo.scale(0.4, 0.4, 0.4);
    return geo;
  };
}

function generateParametric(curve, r = 1, s = 1, tx = 1, ty = 1) {
  return () => {
    mat.uniforms.scale.value.x = 480 * tx;
    mat.uniforms.scale.value.y = 30 * ty;
    const geo = new ParametricGeometries.TubeGeometry(
      new curve(),
      300,
      5 * r,
      36,
      true
    );
    geo.scale(0.0075 * s, 0.0075 * s, 0.0075 * s);
    return geo;
  };
}

const generators = [
  generateTorus(0.25, 1),
  generateTorusKnot(1, 1, 0.5, 1),
  generateTorusKnot(1, 2, 0.5, 1),
  generateTorusKnot(1, 3, 0.75, 1),
  generateTorusKnot(2, 1, 0.75, 1),
  generateTorusKnot(2, 3, 1, 1),
  generateTorusKnot(3, 1, 1, 1),
  generateTorusKnot(3, 2, 1, 1),
  generateParametric(Curves.GrannyKnot, 1, 1, 1, 1),
  generateParametric(Curves.KnotCurve, 1.75, 0.65, 1, 1),
  generateParametric(Curves.TrefoilKnot, 1.25, 1.25, 1, 1),
  generateParametric(Curves.CinquefoilKnot, 1, 1.25, 1, 1),
];

let mesh;

const loader = new TextureLoader();

const mat = new RawShaderMaterial({
  uniforms: {
    time: { value: 0 },
    speed: { value: 1 },
    offset: { value: 0 },
    scale: { value: new Vector2(480, 30) },
    matCap: { value: loader.load("../assets/matcap_2k.jpg") },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  // wireframe: true,
});

function randomize() {
  if (mesh) {
    group.remove(mesh);
    mesh.geometry.dispose();
  }
  const fn = generators[Math.floor(Math.random() * generators.length)];
  const geo = fn();
  mesh = new Mesh(geo, mat);
  group.add(mesh);
}

const geo = generateTorusKnot(3, 1, 1, 1)();
mesh = new Mesh(geo, mat);
group.add(mesh);

scene.add(group);

camera.position.set(2, -4.5, 3.25).normalize();
camera.lookAt(new Vector3(0, 0, 0));
// camera.rotation.z -= PI / 2;
renderer.setClearColor(0x050505, 1);

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyR") {
    randomize();
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

let prevTime = performance.now();
let time = 0;

function render() {
  const t = performance.now();
  const dt = (t - prevTime) / 1000;
  prevTime = t;

  if (running) {
    time += dt / 5;
  }

  mesh.material.uniforms.time.value = time;
  group.rotation.z = (time * TAU) / 3;

  post.render(scene, camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr) {
  post.setSize(w * dpr, h * dpr);
}
addResize(myResize);

resize();
render();
