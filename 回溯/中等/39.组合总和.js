/**
 * @param {number[]} candidates 无重复元素
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];
    /**
     *
     * @param {number} target 目标值
     * @param {number} index 边界索引 有效避免重复的问题
     * @param {number[]} path 路径
     * @returns
     */
    function backtrack(target, index, path) {
      /* 目标值为0时跳出 */
      if (target === 0) {
        result.push(path.concat());
        return;
      }
      for (let i = index; i < candidates.length; i++) {
        const val = target - candidates[i];
        if (val >= 0) {
          path.push(candidates[i]);
          /* 
            假设会有重复的情况是什么情况呢？
            当前元素引用了前面的元素，而我们之前遍历的时候就已经发现了这种情况
            所以可以通过下标划定边界有效解决这个问题
          */ 
          backtrack(val, i, path);
          path.pop();
        }
      }
    }
  
    backtrack(target, 0, []);
    return result;
  };
  