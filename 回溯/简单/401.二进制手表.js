/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const result = []
    /* 枚举所有的二进制可能 */ 
    for(let h=0; h<12; h++) {
        for(let m=0; m<60; m++) {
            const hLen = h.toString(2).replace(/0/g,'').length
            const mLen = m.toString(2).replace(/0/g,'').length
            /* 判断亮着的灯数是否符合要求 */ 
            if(hLen + mLen === turnedOn) {
                result.push(`${h}:${m >= 10 ? m : '0'+m}`)
            }
        }
    }
    return result
};