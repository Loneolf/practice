export function random(min = 0, max) {
  if (min > max) [max, min] = [min, max];
  return Math.random() * (max - min) + min;
}
