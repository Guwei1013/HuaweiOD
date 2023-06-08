/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
	const row = matrix.length,
		col = matrix[0].length;
	const dp = Array.from({ length: row }, () => new Array(col).fill(0));
	for (let x = 0; x < col; x++) {
		dp[0][x] = matrix[0][x];
	}

	for (let y = 1; y < row; y++) {
		for (let x = 0; x < col; x++) {
			let min = Infinity 
			if (x - 1 >= 0) {
				min = Math.min(min,dp[y - 1][x - 1]);
			}
			min = Math.min(min, dp[y-1][x])
			if (x + 1 < col) {
				min = Math.min(min,dp[y - 1][x + 1]);
			}
			dp[y][x] = min + matrix[y][x];
		}
	}

  return Math.min(...dp[row-1])
};
