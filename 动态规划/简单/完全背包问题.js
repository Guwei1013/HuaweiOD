function fn(N, V, weight, value) {
  const dp = new Array(V + 1).fill(0)
  for (let i = 1; i <= N; i++) {
    for (let j = weight[i]; j <= V; j++) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[j])
    }
  }
  return dp[V];
}