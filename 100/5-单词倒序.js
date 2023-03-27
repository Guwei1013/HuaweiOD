/*
    输入单行英文句子，里面包含英文字母，空格以及,.? 三种标点符号，请将句子内每个单词进行倒序，并输出倒序后的语句
    输入描述：
    输入字符串S，S的长度1≤N≤100
    输出描述：
    输出逆序后的字符串
    补充说明：
    标点符号左右的空格≥0，单词间空格＞0

    示例1
    输入：
    yM eman si boB.

    输出：
    My, name is Bob.

    示例2
    输入：
    woh era uoy ? I ma enif.

    输出：
    how are you ? I am fine.
*/
function func(str) {
    // 匹配到自符替换
   return str.split(" ").map(val => val.replace(/[a-z]+/i,val => val.split('').reverse().join(''))).join(' ')
}

console.log(func('yM eman si boB.'))
console.log(func('woh era uoy ? I ma enif.'))
