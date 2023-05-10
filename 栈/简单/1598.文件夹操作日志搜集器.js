/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  const stack = []

  for (let i=0; i<logs.length; i++) {
      const operate = logs[i]
      switch(operate) {
          case '../': 
              stack.pop();
              break;
          case './': 
              break;
          default: 
              stack.push('')
      }
  }

  return stack.length
};