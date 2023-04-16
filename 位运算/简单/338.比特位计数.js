/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = []
  for (let i=0; i<=n; i++) {
      result[i] = 0
      let val = i
      while(val > 0) {
          if((val & 1) === 1) {
              result[i]++
          }
          val >>>= 1
      }
  }
  return result
};