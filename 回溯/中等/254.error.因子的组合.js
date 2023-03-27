/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function (n) {
  const dfs_memo = new Map();

  function dfs(n, lb) {
    if (dfs_memo.has(n)) {
      const ans = [];

      for (const fcmb of dfs_memo.get(n)) {
        if (fcmb[0] >= lb) {
          ans.push(fcmb);
        }
      }

      return ans;
    }

    const ans = [];
    for (let i = lb; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        ans.push([i, n / i]);

        for (const fcmb of dfs(n / i, i)) {
          ans.push([i, ...fcmb]);
        }
      }
    }

    dfs_memo.set(n, ans);
    return ans;
  }

  return dfs(n, 2);
};
