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
    }

    for(let i=0; i<=9; i++) {
      const val = sum*10+i
      if((last === i+1 || last === i-1) && val <= high) {
        dfs(val,i)
      }
    }
  }

  for(let i=1; i<=9; i++) {
    dfs(i,i)
  }

  return result.sort((a,b) => a-b)
};


/**
 * 广度优先遍历
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function(low, high) {
  const result = low > 0 ? [] : [0]
  const path = [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]
  while (path.length) {
    const [sum, last] = path.shift()
    if (sum >= low && sum <= high) {
      result.push(sum)
    }

    for (let i=0; i<=9; i++) {
      const val = i + sum*10
      if((last === i+1 || last === i-1) && val <= hi) {
        path.push([i + sum*10, i])
      }
    }
  } 
  return result
};