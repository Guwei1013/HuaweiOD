/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let num = n
  let count = 0
  while (num > 0) {
      if ((num & 1) === 1) {
          count++
      }
      /* 做右移一般都是用无符号右移 >>> */
      num >>>= 1
  }
  return count
};