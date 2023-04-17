/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let count = 0;
  while (x !== y) {
    /* 从低位一一比较 */
    const top = x & 1
    const bot = y & 1
    if (top !== bot) {
      count++
    }
    /* 去掉已比较的位 */
    x>>>=1
    y>>>=1
  }
  return count;
};