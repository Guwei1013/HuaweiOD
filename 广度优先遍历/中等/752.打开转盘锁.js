/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const visited = new Set(deadends)
  if(visited.has('0000')) return -1
/* 向上转动 */
function upOperate(str, index) {
  const arr = str.split("");
  arr[index] = (parseInt(arr[index]) + 1) % 10;
  return arr.join("");
}

/* 向下转动 */
function downOperate(str, index) {
  const arr = str.split("");
  arr[index] = (parseInt(arr[index]) - 1) >= 0 ? (parseInt(arr[index]) - 1): 9
  return arr.join("");
}

let q = ["0000"], step = 0
while (q.length > 0) {
  let sz = q.length;
  /* 将当前队列中的所有节点向周围扩散 */
  for (let i = 0; i < sz; i++) {
    let cur = q.shift();

    if(cur === target) return step
    /* 将一个节点的相邻节点加入队列 */
    for (let j = 0; j < 4; j++) {
      let up = upOperate(cur, j);
      let down = downOperate(cur, j);
      if (!visited.has(up)) {
        q.push(up);
        visited.add(up);
      }
      if (!visited.has(down)) {
        q.push(down);
        visited.add(down);
      }
    }
  }
  /* 在这里增加步数 */
  step++;
}
return -1;
};
