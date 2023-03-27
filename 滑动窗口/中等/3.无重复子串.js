/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0,right = 0,len = 0,win = new Set()

    while(right < s.length) {
        const pushStr = s[right]
        right++
        while(win.has(pushStr)) {
            const popStr = s[left]
            left++
            win.delete(popStr)
        }
        win.add(pushStr)    
        len = Math.max(len,right - left)
    }

    return len
};