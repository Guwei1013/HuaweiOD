/*
  滚动数组优化后
*/
const fn1 = (N, V, goods) => {
  const dp = new Array(V + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    const [vol, val, n] = goods[i - 1];
    for (let j = V; j >= vol; j--) {
      for (let k = 0; k * vol <= j && k <= n; k++) {
        dp[j] = Math.max(dp[j], dp[j - k * vol] + k * val);
      }
    }
  }
  return dp[V];
};

const fn2 = (N, V, goods) => {
  const dp = new Array(N + 1).fill(0).map(() => new Array(V + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const [vol, val, n] = goods[i - 1];
    for (let j = 1; j <= V; j++) {
      for (let k = 0; j >= k * vol && k <= n; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - k * vol] + k * val);
      }
    }
  }
  return dp[N][V];
};
