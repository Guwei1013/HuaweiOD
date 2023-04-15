/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  /*  x ^ x = 0，x ^ 0 = x */
  for (let i=0; i <= nums.length; i++) {
    result ^= i
  }
  return result
};