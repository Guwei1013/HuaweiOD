/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b)
    const result = [],map = new Set([])
    function backtrack(index,choose,path) {
        if(index === nums.length) {
            result.push(path.concat())
            return
        }

        if(!(nums[index-1] === nums[index] && !choose)) {
            path.push(nums[index])
            backtrack(index+1,true,path)
            path.pop()
        }

        backtrack(index+1,false,path)


    }
    backtrack(0,false,[])
    return result
};