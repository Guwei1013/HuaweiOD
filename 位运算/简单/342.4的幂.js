/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  let num = n,cur = 1
  while(cur <= n && cur > 0) {
      if(cur === n) {
          return true
      }
      cur <<= 2
  }
  return false
};