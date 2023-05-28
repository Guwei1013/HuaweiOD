const getMaxValue = (N, V, goods) => {
  const dp = new Array(N + 1).fill(1).map(() => new Array(V + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const [weight, value] = goods[i - 1];
    for (let j = 1; j <= V; j++) {
      if (j - weight < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - weight] + value, dp[i - 1][j]);
      }
    }
  }

  return dp[N][V];
};


// 滚动数组优化空间复杂度
const fn = (N, V, goods) => {
  const dp = new Array(V+1).fill(0)
  
  for (let i=0; i<N; i++) {
      const [vol, val] = goods[i]
      for (let j=V; j>=vol; j--) {
          dp[j] = Math.max(dp[j], dp[j - vol] + val) 
      }
  }
  return dp[V]
}

console.log(
  getMaxValue(4, 5, [
    [1, 2],
    [2, 4],
    [3, 4],
    [4, 5],
  ])
);
