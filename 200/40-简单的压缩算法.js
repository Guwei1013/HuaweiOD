/*
    题目描述：
    现需要实现一种算法，能将一组压缩字符串还原成原始字符串，还原规则如下：
    1、字符后面加数字N，表示重复字符N次。例如：压缩内容为A3，表示原始字符串为AAA。
    2、花括号中的字符串加数字N，表示花括号中的字符串重复N次。例如：压缩内容为{AB}3，表示原始字符串为ABABAB。
    3、字符加N和花括号后面加N，支持任意的嵌套，包括互相嵌套。例如：压缩内容可以{A3B1{C}3}3。

    输入描述：
    输入一行压缩后的字符串
    输出描述：
    输出压缩前的字符串
    补充说明：
    输入保证，数字不会为0，花括号中的内容不会为空，保证输入的都是合法有效的压缩字符串
    输入输出字符串区分大小写
    输入的字符串长度为范围[1, 10000]
    输出的字符串长度为范围[1, 100000]
    数字N范围[1, 10000]

    示例1
    输入：
    A3
    输出：
    AAA

    说明：
    A3代表A字符重复3次

    示例2
    输入：
    {A3B1{C}3}3

    输出：
    AAABCCCAAABCCCAAABCCC

*/

function func(str) {
    const stack = []
    const numberReg = /\d/
    const letterReg = /[a-z]/i
 
     for(let i=0; i<str.length; i++) {
         if(numberReg.test(str[i])) {
             let val = stack.pop(),cur = ''
             if(val === '}'){
                 while(true) {
                     val = stack.pop()
                     if(val === '{') break
                     else cur = val + cur
                 }
                 stack.push(cur.repeat(+str[i]))
             } else {
                 stack.push(val.repeat(+str[i]))
             }
         } else {
             stack.push(str[i])
         }
     }
     return stack.join('')
 }
 console.log(func('{A3B1{C}3}3') === 'AAABCCCAAABCCCAAABCCC')
 console.log(func('{A3B1{C}3{x2Y}2L4}3') === 'AAABCCCxxYxxYLLLLAAABCCCxxYxxYLLLLAAABCCCxxYxxYLLLL')