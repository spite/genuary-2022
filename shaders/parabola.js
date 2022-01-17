const shader = `float parabola(in float x, in float k) {
  return pow(4. * x * (1. - x), k);
}`;

export { shader };
