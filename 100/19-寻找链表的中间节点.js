/*
    寻找链表的中间结点
    知识点链表数组
    时间限制：1s 空间限制：256MB 限定语言：不限

    题目描述：
    给定一个单链表 L，请编写程序输出 L 中间结点保存的数据。如果有两个中间结点，则输出第二个中间结点保存的数据。
    例如：给定 L 为 1→7→5，则输出应该为 7；给定 L 为 1→2→3→4，则输出应该为 3。

    输入描述：
    每个输入包含 1 个测试用例。每个测试用例第 1 行给出链表首结点的地址、结点总个数正整数 N (≤105)。结点的地址是 5 位非负整数，NULL 地址用 −1 表示。
    接下来有 N 行，每行格式为：
    Address Data Next
    其中 Address 是结点地址，Data 是该结点保存的整数数据(0 ≤ Data ≤ 108)，Next 是下一结点的地址。

    输出描述：
    对每个测试用例，在一行中输出 L 中间结点保存的数据。如果有两个中间结点，则输出第二个中间结点保存的数据。

    补充说明：
    已确保输入的结点所构成的链表 L 不会成环，但会存在部分输入结点不属于链表 L 情况 。

    示例1
    输入：
    00100 4
    00000 4 -1
    00100 1 12309
    33218 3 00000
    12309 2 33218

    输出：
    3

    示例2
    输入：
    10000 3
    76892 7 12309
    12309 5 -1
    10000 1 76892

    输出：
    7

*/

function func(list) {
  const map = {};
  for (const str of list) {
    const [adress, val, next] = str.split(" ");
    if (next !== void 0) {
      map[adress] = {
        val,
        next: next === "-1" ? null : next,
        pre: null,
      };
    }
  }
  const keys = Object.keys(map);
  keys.forEach((val) => {
    if (map[val].next) {
      map[val].next = map[map[val].next];
      map[val].next.pre = map[val];
    }
  });
  let head;
  for (const key of keys) {
    if (!map[key].pre) {
      head = map[key];
      break;
    }
  }

  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}
console.log(
  func([
    "00100 4",
    "00000 4 -1",
    "00100 1 12309",
    "33218 3 00000",
    "12309 2 33218",
  ])
);

console.log(func(["10000 3", "76892 7 12309", "12309 5 -1", "10000 1 76892"]));
