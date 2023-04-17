/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if(num === 0) return '0'
  /* 0 - 15 */ 
  const code = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  let val = num > 0 ? num : 2**32 + num
  let cur = ''
  while(val > 0) {
    cur = code[val % 16] + cur
    val = Math.floor(val / 16)
  }
  return cur
};