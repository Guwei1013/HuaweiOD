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
  const map = {
    a: ["b", "c"],
    b: ["a", "c"],
    c: ["a", "b"],
  };

  const aMax = 2 ** (n - 1);
  const bMax = 2 ** n;
  let start = "a",
    index = k - 1;
  function backtack(path, last, len, map) {
    if (path.length === len) {
      enums.push(path);
      return;
    }
    const option = map[last]
    for (let i = 0; i < option.length; i++) {
      if (option[i] !== last) {
        backtack(path + option[i], option[i], len, map);
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

  backtack(start, start, n, map);

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
  const map = {
    a: ["b", "c"],
    b: ["a", "c"],
    c: ["a", "b"],
  };
  const aMax = 2 ** (n - 1);
  const bMax = 2 ** n;
  const queue = ["a"];

  let step = 1,
  index = aMax - 1 + k;
  if (k > bMax) {
    queue[0] = "c";
    index = k - bMax + (aMax - 1);
  } else if (k > aMax) {
    queue[0] = "b";
    index = k - aMax + (aMax - 1);
  }
  if (step === index) return queue.pop();

  while (queue.length) {
    const str = queue.shift();
    const last = str[str.length - 1];
    const option = map[last];
    for (let i = 0; i < option[last].length; i++) {
      queue.push(str + option[i]);
      step++;
      if (step === index) return queue.pop();
    }
  }
};
