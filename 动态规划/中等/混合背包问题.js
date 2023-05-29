const fn = (N, V, goods) => {
  const data = [];
  const dp = new Array(V + 1).fill(0);
  for (let i = 0; i < goods.length; i++) {
    const [vol, val, n] = goods[i];
    let num = n;
    if (num === -1) {
      data.push([vol, val, 1]);
    } else {
      num = num ? num : Math.floor(V / vol);
      for (let k = 1; k <= num; k++) {
        data.push([vol * k, val * k, k]);
        num -= k;
      }
      if (num > 0) {
        data.push([vol * num, val * num, num]);
      }
    }
  }

  for (let i = 0; i < data.length; i++) {
    const [vol, val] = data[i];
    for (let j = V; j >= vol; j--) {
      dp[j] = Math.max(dp[j], dp[j - vol] + val);
    }
  }

  return dp[V];
};
