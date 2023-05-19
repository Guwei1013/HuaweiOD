/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function(num) {
  let cur = 0;
  let insert = 0;
  let res = 1;
  for (let i = 0; i < 32; i++) {
    if ((num & (1 << i)) !== 0) {
      cur += 1;
      insert += 1;
    } else {
      insert = cur + 1;
      cur = 0;
    }
    res = Math.max(res, insert);
  }
  return res;
};