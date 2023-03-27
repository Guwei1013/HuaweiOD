/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    /**
     * 通过索引保证无重复，后者不能再引用前者
     * @param {*} index 当前左边界索引
     * @param {*} path 路径
     * @returns 
     */   
    function backtrack(index,path) {
        if(path.length === k) {
            result.push(path.concat())
            return
        }
        for(let i=index; i<=n; i++) {
            path.push(i)
            backtrack(i+1,path)
            path.pop()
        }
    }
    backtrack(1,[])
    return result
};