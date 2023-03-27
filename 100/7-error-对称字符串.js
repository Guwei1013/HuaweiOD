/*
    对称就是最大的美学，现有一道关于对称字符串的美学。已知：
    第 1 个字符串：R 
    第 2 个字符串：BR 
    第 3 个字符串：RBBR 
    第 4 个字符串：BRRBRBBR 
    第 5 个字符串：RBBRBRRBBRRBRBBR
    相信你已经发现规律了，没错！就是第 i 个字符串 = 第 i - 1 号字符串的取反 + 第 i - 1 号字符串;取反(R->B, B->R); 
    现在告诉你 n 和 k，让你求得第 n 个字符串的第 k 个字符是多少。(k的编号从 0 开始)


    示例1
    输入：
    5
    1 0
    2 1
    3 2
    4 6
    5 8

    输出：
    red
    red
    blue
    blue
    blue
    说明：
    第 1 个字符串：R  -> 第0个字符为R
    第 2 个字符串：BR  -> 第1个字符为R
    第 3 个字符串：RBBR -> 第2个字符为B
    第 4 个字符串：BRRBRBBR  -> 第6个字符为B
    第 5 个字符串：RBBRBRRBBRRBRBBR -> 第8个字符为B
*/


function func(list) {
    const hash = {'R': 'red', 'B': 'blue'}
    const map = {'R':'B','B':'R'}
    const dp = ['','R']
    let max = 1
    for(const [num] of list) {
      max = Math.max(num,max)
    }
  
  
    for(let i=2; i<=max; i++) {
      let val = ''
      for(let j=0; j< dp[i-1].length; j++) {
          val+= map[dp[i-1][j]] + dp[i-1][j]
      }
      dp.push(val)
    }
  
    console.log(dp)
  //   for(const [num,index] of list) {
  //     console.log(hash[dp[num][index]])
  //   }
  }
  
  let n = 64 //第n个字符串
  let k = 73709551616 //第k个字符
  let reverseFlag //反转标志，true是反转了，false是没反转
   
  function reverseRB(n) {
    //先确认第一次是反转还是不反转，设置标记reverseFlag
    if (k <= (Math.pow(2, n-2))) { //反转了
      reverseFlag = true
    }else { //没反转
      reverseFlag = false
    }
    n = n - 1
    //开始循环确认最终的标志，是反转了还是没反转
    while (n >= 2) {
      if (k <= (Math.pow(2, n-1) / 2)) { //第n-1个反转的字符串
        reverseFlag = !reverseFlag
        n = n - 1
      }else {  // 第n-1个字符串
        k = k - Math.pow(2, n-1) / 2
        n = n - 1
      }
    }
  }
  reverseRB(n)
   
  if (reverseFlag) { //反转了
    console.log('blue')
  }else { //没反转
    console.log('red')
  }
  
  
  func([[1,0],
      [2,1],
      [3,2],
      [4,6],
      [5,8],
      [6,10],
  ])
  console.log(Math.pow(2,64))  
  // func([[64, 73709551616]])
  
  
  