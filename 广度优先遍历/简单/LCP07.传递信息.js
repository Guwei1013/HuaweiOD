/**
 * 深度优先遍历
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  let result = 0;
  const map = new Array(n).fill(1).map((val) => []);
  for (let i = 0; i < relation.length; i++) {
    const [num, next] = relation[i];
    map[num].push(next);
  }

  function dfs(path, cur, len, relation) {
    if (path.length === len) {
      if (cur === n - 1) {
        result++;
      }
      return;
    }

    const option = map[cur];
    for (let i = 0; i < option.length; i++) {
      path.push(option[i]);
      dfs(path, option[i], len, relation);
      path.pop();
    }
  }

  dfs(["0"], 0, k + 1, relation);

  return result;
};

/**
 * 广度优先遍历
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  let result = 0;
  const map = new Array(n).fill(1).map((val) => []);
  for (let i = 0; i < relation.length; i++) {
    const [num, next] = relation[i];
    map[num].push(next);
  }
  const queue = [[0, ["0"]]];
  
  while (queue.length) {
    const [cur, path] = queue.pop();
    if (path.length === k + 1) {
      if (cur === n - 1) {
        result++;
      }
      continue;
    }
    const option = map[cur];

    for (let i = 0; i < option.length; i++) {
      queue.push([option[i], path.concat(option[i])]);
    }
  }

  return result;
};
