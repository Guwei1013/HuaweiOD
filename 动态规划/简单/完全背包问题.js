const fn = (N, V, goods) => {
  const dp = new Array(V + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const [vol, val] = goods[i];
    for (let j = vol; j <= V; j++) {
      dp[j] = Math.max(dp[j], dp[j - vol] + val);
    }
  }
  return dp[V];
};
