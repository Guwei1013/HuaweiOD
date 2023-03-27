/*
    有5台打印机打印文件，每台打印机有自己的待打印队列。因为打印的文件内容有轻重缓急之分，所以队列中的文件有1~10不同的优先级，其中数字越大优先级越高。打印机会从自己的待打印队列中选择优先级最高的文件来打印。如果存在两个优先级一样的文件，则选择最早进入队列的那个文件。
    现在请你来模拟这5台打印机的打印过程。

    输入描述：
    每个输入包含1个测试用例，每个测试用例第1行给出发生事件的数量 N (0 < N < 1000)。
    接下来有 N 行，分别表示发生的事件。
    共有如下两种事件：
    1. "IN P NUM"，表示有一个拥有优先级 NUM 的文件放到了打印机 P 的待打印队列中。(0 < P  <= 5, 0 < NUM <= 10)；
    2. "OUT P"，表示打印机 P 进行了一次文件打印，同时该文件从待打印队列中取出。(0 < P <= 5)。
    输出描述：
    对于每个测试用例，每次"OUT P"事件，请在一行中输出文件的编号。如果此时没有文件可以打印，请输出"NULL"。
    文件的编号定义为："IN P NUM"事件发生第 X 次，此处待打印文件的编号为 X。编号从1开始。

    示例1
    输入：
    7
    IN 1 1
    IN 1 2
    IN 1 3
    IN 2 1
    OUT 1
    OUT 2
    OUT 2
    输出：
    3
    4
    NULL

    示例2
    输入：
    5
    IN 1 1
    IN 1 3
    IN 1 1
    IN 1 3
    OUT 1

    输出：
    2
*/


function func(list) {
    const map = {
      "1": [],
      "2": [],
      "3": [],
      "4": [],
      "5": [],
    }
    let count = 0
    for(let i=0; i<list.length; i++) {
      const [command, id, val] = list[i].split(" ")
      if(command === 'IN') {
          count++
          map[id].push([val,count])
      }
      else {
          if(map[id].length) {
              map[id].sort((a,b) => b[0] - a[0])
              const [a,num] = map[id].shift()
              console.log(num)
          } else {
              console.log(null)
          }
      }
    }
  }
  
  console.log(func(['IN 1 1',
      'IN 1 2',
      'IN 1 3',
      'IN 2 1',
      'OUT 1',
      'OUT 2',
      'OUT 2'
  ]));
  
  console.log(func(['IN 1 1',
      'IN 1 3',
      'IN 1 1',
      'IN 1 3',
      'OUT 1',
  ]));
  