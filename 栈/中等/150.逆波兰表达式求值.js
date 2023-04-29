/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []
  const operator = new Set(['+','-','*','/'])
  for(let i=0; i<tokens.length; i++) {
      const str =tokens[i]
      if(operator.has(str)) {
          const right = stack.pop()
          const left = stack.pop()
          switch(str) {
              case '+':
                  stack.push(left+right) 
                  break;
              case '-':
                  stack.push(left-right) 
                  break;
              case '*':
                  stack.push(left*right) 
                  break;
              default:
                  stack.push(left/right|0)
                  break;
          }
      } else {
          stack.push(+str)
      }
  }

  return stack.pop()
};