/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 深度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  function dfs(node, direction) {
    /* 只有叶子节点的方向是左边才取值 */
    if (node.left === null && node.right === null) {
      return direction === "left" ? node.val : 0;
    }
    let sum = 0;
    if (node.left) {
      sum += dfs(node.left, "left");
    }
    if (node.right) {
      sum += dfs(node.right, "right");
    }
    return sum;
  }
  return dfs(root, "");
};




/**
 * 广度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  function isLeafNode(node) {
    return node.left === null && node.right === null
  }
  const queue = [root]
  let sum = 0
  while(queue.length) {
    const len = queue.length
    for(let i=0; i<len; i++) {
      const node = queue.shift()
      if (node.left) {
              if (isLeafNode(node.left)) {
        sum+=node.left.val
      } else {
        queue.push(node.left)
      }
      }

      if (node.right && !isLeafNode(node.right)) {
        queue.push(node.right)
      }
    } 
  }
  return sum
};