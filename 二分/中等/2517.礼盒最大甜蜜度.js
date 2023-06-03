/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b);
  const len = price.length;
  let min = 0,
    max = price[len - 1] - price[0];
  while (min <= max) {
    let gap = Math.floor((min + max) / 2);
    let num = 1;
    for (let left = 0, right = 1; right < len; right++) {
      if (price[right] - price[left] >= gap) {
        num++;
        left = right;
      }
    }

    if (num >= k) {
      min = gap + 1;
    } else if (num < k) {
      max = gap - 1;
    }
  }
  return min - 1;
};