/**
 * 回溯算法 
 * 剪枝优化
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  let maxCount = 3 * Math.pow(2, n - 1);
  if (k > maxCount) {
    return "";
  }
  const enums = [];
  const option = ["a", "b", "c"];

  const aMax = 2 ** (n - 1);
  const bMax = 2 ** n;
  let start = "a",
    index = k - 1;
  function backtack(path, last, len, option) {
    if (path.length === len) {
      enums.push(path);
      return;
    }
    for (let i = 0; i < option.length; i++) {
      if (option[i] !== last) {
        backtack(path + option[i], option[i], len, option);
      }
    }
  }
  if (k > bMax) {
    start = "c";
    index = k - bMax - 1;
  } else if (k > aMax) {
    start = "b";
    index = k - aMax - 1;
  }

  backtack(start, start, n, option);

  return enums[index];
};

/**
 * 广度优先遍历
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  let maxCount = 3 * Math.pow(2, n - 1);
  if (k > maxCount) {
    return "";
  }
  const option = ["a", "b", "c"];
  const path = [];
  const queue = [""];
  let depth = 0;
  while (queue.length && depth < n) {
    const len = queue.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      const str = queue.shift();
      const last = str[str.length - 1];
      for (let j = 0; j < option.length; j++) {
        if (option[j] !== last) {
          queue.push(str + option[j]);
          count++;
        }
        if (depth === n - 1 && count === k) {
          return queue[queue.length - 1];
        }
      }
    }
    depth++;
  }
};
