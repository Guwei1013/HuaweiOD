/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = []
    /* 方便去重 */ 
    const combines = nums.concat().sort((a,b) => a-b)

    function backtrack(combine,path) {
        if(path.length === nums.length) {
            result.push(path.concat())
        }
        /* 用于记录方便去重 */ 
        const memo = new Set([])
        for(let i=0; i<combine.length; i++) {
            /* 由于整个数组都是有序的，存在重复的可能只有相同元素开始排列 */ 
            if(!memo.has(combine[i])) {
                memo.add(combine[i])
                path.push(combine[i])
                backtrack(combine.filter((val,index) => index !== i),path)
                path.pop()
            }
        }
    }
    backtrack(combines,[])
    return result
};