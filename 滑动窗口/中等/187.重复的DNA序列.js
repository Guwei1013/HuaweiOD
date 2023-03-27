/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if(s.length < 10) return []
    const map = new Set(),result = new Set()
    let right = 0
    while(right < s.length) {
        right++
        if(right >= 10) {
            const key = s.slice(right-10,right)
            if(map.has(key)) {
                result.add(key)
            } else {
                map.add(key)
            }
        }
    }
    return Array.from(result)
};