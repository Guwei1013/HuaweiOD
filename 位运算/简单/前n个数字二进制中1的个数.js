/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const memo = [];
  for (let i = 0; i <= n; i++) {
    let val = i,
      count = 0;
    while (val) {
      if (val & (1 === 1)) {
        count++;
      }
      val >>>= 1;
    }
    memo.push(count);
  }

  return memo;
};


var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  let highBit = 0;
  for (let i = 1; i <= n; i++) {
      if ((i & (i - 1)) == 0) {
          highBit = i;
      }
      bits[i] = bits[i - highBit] + 1;
  }
  return bits;
};


var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      bits[i] = bits[i >> 1] + (i & 1);
  }
  return bits;
};