/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  const row = grid.length, col = grid[0].length
  const memo = new Array(row+1).fill(0).map(val => new Array(col+1).fill(0))

  for (let y=1; y<=row; y++) {
      for (let x=1; x<=col; x++) {
          memo[y][x] = Math.max(memo[y][x-1], memo[y-1][x]) + grid[y-1][x-1]
      }
  }

  return memo[row][col]
};