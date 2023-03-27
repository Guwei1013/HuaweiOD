/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(let i=0; i<nums.length; i++) {
        const val = nums[i]
        if(map.has(val)) {
            const pre = map.get(val)
            if(i - pre <= k) return true
        }
        /* 每次保证下标是离得最近的 */ 
        map.set(val,i)
    }
    return false
};