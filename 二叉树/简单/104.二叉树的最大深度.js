/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 官方递归
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};



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
var maxDepth = function(root) {
  if(!root) return 0
  function dfs(node,depth) {
      if(node.left === null && node.right === null) {
          return depth
      }

      let max = dep
      if(node.left) {
          max = Math.max(max,dfs(node.left,depth+1))
      }
      if(node.right) {
          max = Math.max(max,dfs(node.right,depth+1))
      }

      return max
  }
  return dfs(root,1)
};



/**
 * 层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  const queue = [root]
  let depth = 0

  while(queue.length) {
      const len = queue.length
      for(let i=0; i<len; i++) {
          const node = queue.shift()
          if(node.left) {
              queue.push(node.left)
          }
          if(node.right) {
              queue.push(node.right)
          }
      }
      depth++
  }

  return depth
};