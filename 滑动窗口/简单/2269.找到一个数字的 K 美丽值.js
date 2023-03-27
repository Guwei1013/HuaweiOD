/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    const str = num.toString()
    let result = 0,left = 0,right = 0
    while(right<str.length) {
        while(right - left === k) {
            left++
        }
        right++
        if(right - left === k) {
            const val = parseInt(str.slice(left,right))
            if(num % val === 0) {
                result++
            }  
        }
    }
    return result
};