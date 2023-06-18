/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let l = 0, r = s.length - 1, arr = s.split('')
    while (l < r) {
        if (arr[l] > arr[r]) {
            arr[l] = arr[r]
        } else {
            arr[r] = arr[l]
        }
        l++
        r--
    }
    return arr.join('')
};