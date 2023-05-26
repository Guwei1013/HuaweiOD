/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  let dp = 0;
  for (let i = 2; i <= n; i++) {
    const val = prices[i - 1];
    dp = Math.max(dp, dp + val - prices[i - 2]);
  }
  return dp;
};
