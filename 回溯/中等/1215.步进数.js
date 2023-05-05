/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function(low, high) {
  const result = low > 0 ? [] : [0]
  function dfs(sum, last) {
    if(sum >= low && sum <= high) {
      result.push(sum)
    } else if(sum > high) {
      return
    }

    for(let i=0; i<=9; i++) {
      if(last === i+1 || last === i-1) {
        dfs(sum*10+i,i)
      }
    }
  }

  for(let i=1; i<=9; i++) {
    dfs(i,i)
  }

  return result.sort((a,b) => a-b)
};