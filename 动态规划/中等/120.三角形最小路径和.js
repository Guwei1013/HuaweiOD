/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	const row = triangle.length;
	const dp = [[triangle[0][0]]];

	for (let y = 1; y < row; y++) {
		const col = triangle[y];
		dp[y] = [dp[y - 1][0] + col[0]];
		for (let x = 1; x < y; x++) {
			dp[y][x] = Math.min(dp[y - 1][x], dp[y - 1][x - 1]) + col[x];
		}
		dp[y][y] = dp[y - 1][y - 1] + col[y];
	}
	return Math.min(...dp[dp.length - 1]);
};

var minimumTotal = function (triangle) {
	const row = triangle.length;
	const dp = [triangle[0][0]];

	for (let y = 1; y < row; y++) {
		const col = triangle[y];
		dp[y] = dp[y - 1] + col[y];
		for (let x = y - 1; x > 0; x--) {
			dp[x] = Math.min(dp[x], dp[x - 1]) + col[x];
		}
		dp[0] = dp[0] + col[0];
	}
	return Math.min(...dp);
};
