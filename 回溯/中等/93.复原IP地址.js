/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = []
    /**
     * 
     * @param {*} index 边界下标
     * @param {*} path 路径
     * @returns 
     */
    function backtrack(index,path) {
        /* 必须要保证IPV4，且拼接后和原字符串一致，           · */ 
        if(path.length === 4 && path.join('') === s) {
            result.push(path.join('.'))
            return
        }
        for(let i=index; i<s.length; i++) {
            const ip = parseInt(s.slice(index,i+1))
            if(ip <= 255) {
                path.push(ip)
                backtrack(i+1,path)
                path.pop()
            }
        }
    }
    backtrack(0,[])
    return result
};