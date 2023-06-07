/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const top = new Array(n).fill(1);
  let left = 1;
  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      left = top[x] + left;
      top[x] = left;
    }
    left = 1;
  }

  return left;
};

var uniquePaths = function (m, n) {
  const top = new Array(n).fill(1);
  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      top[x] += top[x - 1];
    }
  }

  return top[top.length - 1];
};
