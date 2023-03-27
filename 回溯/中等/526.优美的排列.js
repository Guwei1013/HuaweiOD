/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    const source = new Array(n+1).fill(false)
    let result = 0
    function backtrack(index,path) {
        if(path.length === n) {
            result++
            return
        }
        for(let i=1; i<source.length; i++) {
            /* 使用过的元素跳过 */ 
            if(source[i]) continue
            if(i % index === 0 || index % i === 0 ) {
                source[i] = true
                path.push(i)
                backtrack(index+1,path)
                path.pop()
                source[i] = false
            }
        }
    }
    backtrack(1,[])
    return result
};