/*
    小明负责维护项目下的代码，需要查找出重复代码，用以支撑后续的代码优化，请你帮助小明找出重复的代码，。
    重复代码查找方法：以字符串形式给定两行代码（字符串长度 1 < length <= 100，由英文字母、数字和空格组成），找出两行代码中的最长公共子串。
    注： 如果不存在公共子串，返回空字符串
    
    例一：
    hello123word
    hello123abc4
    输出 hello123

    例二:
    wehlwb
    hlword'
    输出 hlw
*/


function func(str1,str2) {
    const dp = []
    let maxLen = 0,end = 0
    for(let i=0; i<str1.length; i++) {
        dp.push([])
        for(let j=0; j<str2.length; j++) {
            if(str1[i] === str2[j]) {
                if(i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = dp[i-1][j-1] + 1
                }
            } else {
                dp[i][j] = 0
            }
            if(maxLen < dp[i][j]) {
                maxLen = dp[i][j]
                end = i
            }
        }
    }
    return str1.slice((end+1)-maxLen,end+1)
}

console.log(func('hello123abc4',''))
console.log(func('wehlwb','hlword'))
