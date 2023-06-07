/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	const row = grid.length,
		col = grid[0].length;
	const dp = Array.from({ length: row }, () => new Array(col).fill(0));
	dp[0][0] = grid[0][0];
	for (let y = 1; y < row; y++) {
		dp[y][0] = dp[y - 1][0] + grid[y][0];
	}

	for (let x = 1; x < col; x++) {
		dp[0][x] = dp[0][x - 1] + grid[0][x];
	}
	for (let y = 1; y < row; y++) {
		for (let x = 1; x < col; x++) {
			dp[y][x] = Math.min(dp[y - 1][x], dp[y][x - 1]) + grid[y][x];
		}
	}

	return dp[row - 1][col - 1];
};
