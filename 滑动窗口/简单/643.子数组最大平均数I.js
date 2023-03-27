/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0,right = k,max = 0,cur = 0
    /* 提前模拟一次判断，因为最初平均数 */
    for(let i=0; i<k; i++) {
        cur+=nums[i]
    }
    max = cur / k
    cur-=nums[left]
    left++


    while(right < nums.length) {
        cur+= nums[right]
        right++
        while(right - left === k) {
            max = Math.max(cur/k,max)
            cur-=nums[left]
            left++
        }
    }

    return max
};