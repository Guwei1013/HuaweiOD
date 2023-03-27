/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    /**
     * 
     * @param {number[]} combine 当前可选择的元素
     * @param {number} path 路径
     * @returns 
     */
    function backtrack(combine,path) {
        /* 路径长度等于源数组长度时退出 */ 
        if(path.length === nums.length) {
            result.push(path.concat())
            return
        }
        /* 每次进入下一层时，排除当前使用过的元素 */ 
        for(let i=0; i<combine.length; i++) {
            path.push(combine[i])
            backtrack(combine.filter((val,index) => index!==i),path)
            path.pop()
        }
    }
    backtrack(nums,[])
    return result
};