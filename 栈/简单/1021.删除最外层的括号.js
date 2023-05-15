/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "",
    stack = [],
    left = 0,
    right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    stack.push(s[i]);

    if (left === right) {
      for (let i = 1; i < stack.length - 1; i++) {
        result += stack[i];
      }
      stack = [];
      left = 0;
      right = 0;
    }
  }
  return result;
};
