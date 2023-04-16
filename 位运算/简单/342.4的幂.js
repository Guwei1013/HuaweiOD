/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let cur = 1;
  /* cur超过32位时，值会变为0 */
  while (cur <= n && cur > 0) {
    if (cur === n) {
      return true;
    }
    cur <<= 2;
  }
  return false;
};
