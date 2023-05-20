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
