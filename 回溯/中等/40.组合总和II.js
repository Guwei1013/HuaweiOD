/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    /* 排序防止重复组合，主要是因为输入元素有重复的元素 */ 
    candidates.sort((a,b) => a-b)
    const result = []
    /**
     * 
     * @param {*} target 当前的目标值
     * @param {number} index 边界索引 避免重复的问题
     * @param {*} path 路径
     * @returns 
     */
    function backtrack(target,index,path) {
        if(target === 0) {
            result.push(path.concat())
            return
        }
        const memo = new Set([])
        for(let i=index; i<candidates.length; i++) {
            const val = target - candidates[i]
            /* 使用memo避免重复组合 */
            if(val >= 0 && !memo.has(candidates[i])) {
                memo.add(candidates[i])
                path.push(candidates[i])
                backtrack(val,i+1,path)
                path.pop()
            }
        }
    }
    backtrack(target,0,[])
    return result
};