/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let count = 0,result = ''
  for (let i=0; i<s.length; i++) {
      if (s[i] === ')') {
          count--
      } 

      if (count) {
          result += s[i]
      }

      if (s[i] === '(') {
          count++
      }
  }
  return result
};