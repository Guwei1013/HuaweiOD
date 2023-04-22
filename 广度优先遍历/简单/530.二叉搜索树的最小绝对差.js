/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 迭代
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  const queue = [];
  let node = root;
  const path = [];
  while (queue.length || node) {
    while (node) {
      queue.push(node);
      node = node.left;
    }
    node = queue.pop();
    path.push(node.val);
    node = node.right;
  }
  let min = Infinity;
  for (let i = 0; i < path.length - 1; i++) {
    min = Math.min(min, path[i + 1] - path[i]);
  }
  return min;
};


/**
 * 递归
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  const path = []
  let min = Infinity
  function dfs(node) {
      if(node.left) {
          dfs(node.left)
      }
      path.push(node.val)
      if(path.length >= 2) {
          min = Math.min(min, path[path.length -1] - path[path.length -2])
      } 
      if(node.right) {
          dfs(node.right)
      }
  }
  dfs(root)
  return min
};
