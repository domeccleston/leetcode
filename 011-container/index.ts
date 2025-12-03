const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const input2 = [1, 1];

function maxArea(height: number[]) {
  let max = -1;
  let a = 0;
  let b = height.length - 1;

  while (a <= b) {
    const distance = b - a;
    const area = Math.min(height[a], height[b]) * distance;
    if (area > max) max = area;
    if (height[a] < height[b]) a++;
    else b--;
  }

  return max;
}
