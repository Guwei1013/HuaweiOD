/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const result = []
    let index = 0
    while(index !== s.length) {
        if(result.length) {
            const last = result[result.length - 1]
            /* 大写字母 */
            if(last.toUpperCase() === last) { 
                if(last.toLowerCase() === s[index]) {
                    result.pop()
                } else {
                    result.push(s[index])
                }
            } else {
                if(last.toUpperCase() === s[index]) {
                    result.pop()
                } else {
                    result.push(s[index])
                }
            }
        }
        else {
          result.push(s[index])
        }
        index++
    }
    return result.join('')
};