/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    /* 数组查询效率比hash表快一点 */
    const map = new Array('z'.codePointAt()+1).fill(0)
    let maxLen = 0, charSize = 0,left = 0,right = 0

    while(right<s.length) {
        /* 即将加入元素存在，长度增加 */ 
        if(map[s[right].charCodeAt()] > 0) {
            map[s[right].codePointAt()]++
            right++
        } else {
            /* 即将加入元素不存在，判断当前的字符种类数 */
            if(charSize === 2) {
                /* 当字符种类数少于2退出循环 */
                while(charSize >= 2) {
                    map[s[left].codePointAt()]--
                    if(!map[s[left].codePointAt()]) {
                        charSize--
                    }
                    left++
                }
            } 
            map[s[right].codePointAt()]++
            right++
            charSize++
        }
        maxLen = Math.max(right - left,maxLen)
    }
    return maxLen
};