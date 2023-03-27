/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const result = []
    function backtrack(index,path) {
        if(path.length >= 2) {
            result.push(path.concat())
        }
        const memo = new Set()
        for(let i=index; i<nums.length; i++) {
            /* 防止重复 */
            if(memo.has(nums[i])) continue
            memo.add(nums[i])
            if(path.length) {
                if(path[path.length - 1] <= nums[i]) {
                    path.push(nums[i])
                    backtrack(i+1,path)
                    path.pop(nums[i])
                }
               
            } else {
                path.push(nums[i])
                backtrack(i+1,path)
                path.pop()
            }
        } 
    }
    backtrack(0,[])
    return result
};