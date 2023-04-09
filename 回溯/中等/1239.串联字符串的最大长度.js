/**
 * 原题是直接返回长度，我稍微改了一下用于记录最长的字符串
 * @param {string[]} arr 
 * @returns 
 */
var maxLength = function (arr) {
    let result = ''
    const source = [],code_a = 'a'.codePointAt()
    /* 拿到每个字符串都不存在重复的字符数组 */
    for (let i=0; i<arr.length; i++) {
        let str = arr[i]
        let cur = 0
        for (let j=0; j<str.length; j++) {
            const index = str[j].codePointAt() - code_a
            if(((cur >> index) & 1) === 1) {
                cur = 0
                break;
            }
            cur = cur | (1 << index)
        }
        if(cur !== 0) {
            source.push([cur,str])
        }
    }

    function backtrack(i,val,path,options) {
        if(i === options.length) {
            if(result.length < path.length) {
                result = path
            } 
            return
        }
        if((val & options[i][0]) === 0) {
            backtrack(i+1, val|options[i][0], path+options[i][1], options)
        }
        backtrack(i+1, val, path, options)
    }
    backtrack(0,0,'',source)

    return result.length
}