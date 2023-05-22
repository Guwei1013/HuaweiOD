/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 2) {
    return Math.max(...nums);
  }

  return Math.max(
    getMaxValue(0, nums.length - 1, nums),
    getMaxValue(1, nums.length, nums)
  );
};

function getMaxValue(start, end, nums) {
  if (end - start <= 2) {
    return Math.max(...nums.slice(start, end + 1));
  }
  const dp = new Array(nums.length).fill(0);
  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i < end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[end - 1];
}
