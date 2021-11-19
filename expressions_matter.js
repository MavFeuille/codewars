// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

const expressionMatter = (a, b, c) => {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}
