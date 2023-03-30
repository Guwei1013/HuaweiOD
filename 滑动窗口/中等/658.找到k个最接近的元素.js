/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    if(arr.length === k) return arr
    let left = 0,right = 0,min = arr.slice(0,k).reduce((pre,cur) => pre+Math.abs(cur-x),0),cur = 0,end = k-1
    /* 由于整个数组都是有序的，只要找到的元素为连续长度为K的一个区间，需要比较不同区间累计绝对值大小  */ 
    while(right < arr.length) {
        cur+=Math.abs(arr[right] - x)
        right++
        if(right - left === k) {
            if(cur < min) {
                min = cur
                end = right - 1
            }
            cur-=Math.abs(arr[left] - x)
            left++
        }
    }
    console.log(end)
    return arr.slice(end+1-k,end+1)
};