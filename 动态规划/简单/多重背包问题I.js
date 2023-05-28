const fn = (N, V, goods) => {
  const dp = new Array(V + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    const [vol, val, n] = goods[i - 1];
    for (let j = V; j >= vol; j--) {
      for (let k=0;  k*vol<=j && k<=n ; k++) {
        dp[j] = Math.max(dp[j], dp[j - k*vol] + k*val) 
      }
    }
  }
  return dp[V];
};