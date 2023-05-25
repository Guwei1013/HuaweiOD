/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let dp = 0;
  let min = prices[0];
  for (let i = 1; i <= len; i++) {
    const val = prices[i - 1];
    dp = Math.max(dp, val - min);
    min = Math.min(min, val);
  }

  return dp;
};
