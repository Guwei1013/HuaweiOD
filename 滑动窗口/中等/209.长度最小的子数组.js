/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0,right = 0,cur = 0,min = nums.length + 1
    while(right < nums.length) {
        cur+=nums[right]
        right++ 
        /* >=target */
        while(cur >= target) {
            min = Math.min(min,right - left)
            cur-=nums[left]
            left++
        }
        
    }

    /* 找不到返回 0 */
    return min === nums.length + 1 ? 0 : min
};