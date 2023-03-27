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

        /* 
            当前一个元素被选择过和当前元素相同时，当前元素是不可以不选择的 
            会造成重复，比如说[1,2,2]
            第一个 [2] 必定是在下标为2收集的，后面回溯到下标1选择后，下标2不选择就会造成重复
        */ 
        if(!(choose && nums[index-1] === nums[index])) {
            backtrack(index+1,false,path)
        } 
           

        path.push(nums[index])
        backtrack(index+1,true,path)
        path.pop()

    }
    backtrack(0,false,[])
    return result
};