const fn = (N, V, goods) => {
  const data = []
  const dp = new Array(V+1).fill(0)
  for (let i=0; i<goods.length; i++) {
    const [vol, val, n] = goods[i]
    for (let k =1; k<=n; i++) {
      data.push([vol*k, val*k, k])
      n-=k
    }
    if(n > 0) {
      data.push([vol*n, val*n, n])
    }
  }

  for (let i=0; i<data.length; i++) {
    const [vol, val, n] = data[i]
    for (let j=V; j>=vol; j++) {
      dp[j] = Math.max(dp[j], dp[j - vol] + val)
    }
  }

  return dp[N]
}