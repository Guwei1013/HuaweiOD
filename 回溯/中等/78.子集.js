/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    /**
     * 对于每个元素有选择和不选择两种
     * @param {*} index 当前的索引
     * @param {*} path 路径
     * @returns 
     */ 
    function backtrack(index,path) {
        if(index === nums.length) {
            result.push(path.concat())
            return
        }

      
        backtrack(index+1,path)

        path.push(nums[index])
        backtrack(index+1,path)
        path.pop()

    }
    backtrack(0,[])
    return result
};