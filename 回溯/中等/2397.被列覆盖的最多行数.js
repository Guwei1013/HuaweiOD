/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function (matrix, numSelect) {
  const row = matrix.length,
    col = matrix[0].length;
  const used = new Array(row).fill(false);
  let max = 0;
  function backtrack(index, depth) {
    if (depth === numSelect) {
      let count = 0;
      let x, y;
      for (y = 0; y < row; y++) {
        for (x = 0; x < col; x++) {
          if (matrix[y][x] === 1) {
            break;
          }
        }
        if (x === col) {
          count++;
        }
      }
      max = Math.max(max, count);
      return;
    }

    for (let x = index; x < col; x++) {
      if (used[x]) continue;
      used[x] = true;
      for (let y = 0; y < row; y++) {
        matrix[y][x] = matrix[y][x] * -1;
      }
      backtrack(x + 1, depth + 1);
      for (let y = 0; y < row; y++) {
        matrix[y][x] = matrix[y][x] * -1;
      }
      used[x] = false;
    }
  }

  backtrack(0, 0);

  return max;
};
