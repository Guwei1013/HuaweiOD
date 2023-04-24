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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const num = []
  const count = []
  function dfs(node,depth) {
      if(num.length >= depth) {
          num[depth - 1] += node.val
          count[depth - 1]++
      } else {
          num[depth - 1] = node.val
          count[depth - 1] = 1
      }


      if (node.left) {
          dfs(node.left,depth+1)
      }
      if (node.right) {
          dfs(node.right,depth+1)
      }
  }
  dfs(root,1)

  return num.map((val,i) => (val / count[i]).toFixed(5))
};


/**
 * 广度优先遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const queue = [root]
  const path = []
  while (queue.length) {
      const len = queue.length 
      let sum = 0
      for (let i=0; i<len; i++) {
          const node = queue.shift()
          sum+=node.val
          if (node.left) {
              queue.push(node.left)
          }
          if (node.right) {
              queue.push(node.right)
          }
      }

      path.push((sum / len).toFixed(5))
  }

  return path
};