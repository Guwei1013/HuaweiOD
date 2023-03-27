/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    // 收集子集的异或和 也就是进行按位运算 a^b
    const result = []
    function backtrack(index,path) {
        // 退出回溯
        if(index === nums.length) {
            // 保证至少选择一个元素
            if(path.length) {
                // 求异或和
                result.push(path.reduce((pre,cur) => pre ^ cur))
            }
            return
        }

        // 选择当前元素
        path.push(nums[index])
        backtrack(index+1,path)
        path.pop()


        // 不选择当前元素
        backtrack(index+1,path)
    }
    backtrack(0,[])

    return result.reduce((pre,cur) => pre+cur)
};