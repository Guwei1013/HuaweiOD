/**
 * 回溯算法
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
  const enums = []
  const option = ['a','b','c']
  function backtack(path, last, len, option) {
      if(path.length === len) {
          enums.push(path)
          return
      }
      for(let i=0; i<option.length; i++) {
          if(option[i] !== last) {
              backtack(path+option[i], option[i], len, option)
          }
      }
  }

  for(let i=0; i<option.length; i++) {
      backtack(option[i], option[i], n, option)
  }

  return enums.length >= k ? enums[k-1] : ''
};