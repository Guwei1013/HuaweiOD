/**
 * @param {string} s
 * @return {number}
 */

function computed(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return (a * b) | 0;
    default:
      return (a / b) | 0;
  }
}

var calculate = function (s) {
  const nums = [],
    sign = [],
    map = {
      "+": 0,
      "-": 0,
      "*": 1,
      "/": 1,
    };
  const numReg = /\d/,
    signReg = /\+|-|\*|\//;

  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (numReg.test(str)) {
      num = num * 10 + parseInt(str);
    } else if (signReg.test(str)) {
      nums.push(num);
      num = 0;

      while (map[sign[sign.length - 1]] >= map[str]) {
        const operator = sign.pop();
        const right = nums.pop(),
          left = nums.pop();
        nums.push(computed(left, right, operator));
      }
      sign.push(str);
    }
  }
  nums.push(num);

  while (sign.length) {
    const operator = sign.pop();
    const right = nums.pop(),
      left = nums.pop();
    nums.push(computed(left, right, operator));
  }
  return nums.pop();
};
