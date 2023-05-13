/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
  let left = 0,right = 0, T = 0, sum = 0
  while (right < calories.length) {
      T += calories[right]
      right++
      if(right - left === k) {
          if (T < lower) {
              sum--
          } else if (T > upper)  {
              sum++
          }
          T-=calories[left]
          left++
      } 
  }
  return sum
};