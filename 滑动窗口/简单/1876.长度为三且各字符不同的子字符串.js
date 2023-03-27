/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    /* */ 
    const map = new Map()
    let left = 0,right = 0,result = 0
    while(right < s.length) {
        while(map.has(s[right]) || right - left === 3) {
            map.delete(s[left])
            left++
        }
        map.set(s[right],1)
        right++
        if(right -left === 3) {
            result++
        }
    }
    return result
};