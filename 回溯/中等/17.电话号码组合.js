/**
 * @param {digitsing} digits
 * @return {digitsing[]}
 */
var letterCombinations = function(digits) {
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    const result = []
    /**
     * 
     * @param {number} index 当前遍历字符的索引
     * @param {string} path 路径
     * @returns 
     */
    function backtrack(index,path) {
        /* 当路径长度等于digits长度时退出 */
        if(path.length === digits.length) {
            result.push(path)
            return
        }
        const key = digits[index]
        /* 依次遍历对应数字下可能出现的字符 */
        for(let i=0; i<map[key].length; i++) {
            backtrack(index+1,path+map[key][i])
        }
    }
    /* 空字符串返回一个空数组 */
    if(digits.length) backtrack(0,'')
    return result
};