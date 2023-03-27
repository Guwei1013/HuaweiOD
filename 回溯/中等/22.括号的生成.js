/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    /**
     * 关键在于生成有效括号必须保证当前的左括号数大于或等于右括号数
     * @param {*} left 当前左括号的数量
     * @param {*} right 当前右括号的数量
     * @param {*} path 路径
     * @returns 
     */
    function backtrack(left,right,path) {
        /* 当前左右括号的属性都为n时退出 */ 
        if(left === n && right === n) {
            result.push(path)
            return
        }
        /* 保证左右括号数量都为n */
        if(left <= n) {
            backtrack(left+1,right,path+'(')
        }
        /* 保证左括号始终大于或等于右括号的数量 */
        if(left > right) {
            backtrack(left,right+1,path+')')
        }
    }
    backtrack(0,0,'')
    return result
};