/**
 * @param {string} s
 * @return {number}
 */


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
  const computed = {
    "+": (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b | 0,
  }

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
        nums.push(computed[operator](left,right));
      }
      sign.push(str);
    }
  }
  nums.push(num);

  while (sign.length) {
    const operator = sign.pop();
    const right = nums.pop(),
      left = nums.pop();
      nums.push(computed[operator](left,right));
  }
  return nums.pop();
};



/**
 * @param {string} s
 * @return {number}
 */

var calculate = function (s) {
  const nums = [];
  const numReg = /\d/,
    signReg = /\+|-|\*|\//;
  const  computed = {
    "+": (num, nums) => nums.push(num),
    '-': (num, nums) => nums.push(-num),
    '*': (num, nums) => nums.push(nums.pop() * num),
    '/': (num, nums) => nums.push(nums.pop() / num | 0),
  }
  let num = 0,
    sign = "+";

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if(str === ' ') {
    } else if (numReg.test(str)) {
      num = num * 10 + parseInt(str);
    } else  {
      computed[sign](num,nums)
      sign = str;
      num = 0;
    }
  }

  computed[sign](num,nums)
  return nums.reduce((a, b) => a + b);
};