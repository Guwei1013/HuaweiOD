/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 广度优先遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return []
  const queue = [root]
  const result = []
  while(queue.length) {
      const len = queue.length
      const path = []
      for(let i=0; i<len; i++) {
          const node = queue.shift()
          if(node.left) {
              queue.push(node.left)
          }
          if(node.right) {
              queue.push(node.right)
          }
          path.push(node.val)
      }
      result.unshift(path)
  }
  return result
};