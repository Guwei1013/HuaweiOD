/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let result = 0,min = 0,max = 0
    nums.forEach((val) => {
        min-=val
        max+=val
    })

    if(target < min) return 0
    if(target > max) return 0


    function backtrack(index,sum) {
        if(index === nums.length) {
            if(sum === target) {
                result++
            }
            return
        }
        backtrack(index+1,sum+nums[index])
        backtrack(index+1,sum-nums[index])
    }
    backtrack(0,0)
    return result
};