/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity
  const len = nums.length 
  let temp = -Infinity
  for (let i=1; i<=len; i++) {
      const val = nums[i-1]
      temp = Math.max(temp + val, val)
      max = Math.max(max, temp)
  }
  return max
};