function fn(N, V, goods) {
  const dp = new Array(V + 1).fill(0).map((val) => new Array(N + 1).fill(0));
  console.log(dp)
  for (let i = 1; i <= V; i++) {
    for (let j = 1; j <= N; j++) {
      const [weight, value] = goods[j - 1];
      if (i < weight) {
        dp[i][j] = dp[i][j-1]
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - weight][j] + value);
      }
    }
  }
  return dp[V][N];
}