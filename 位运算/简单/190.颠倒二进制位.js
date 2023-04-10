/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if(n === 0) return 0
    let result = 0
    for(let i=0; i<32; i++) {
        result |=  (n & 1) << (31 - i)
        n >>>= 1
    }
    return result >>> 0
};