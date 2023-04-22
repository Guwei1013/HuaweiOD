/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 广度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function(root) {
  const map = new Set()
  const queue = [root]
  while(queue.length) {
      const len = queue.length
      for(let i=0; i<len; i++) {
          const node = queue.shift()
          map.add(node.val)
          if(node.left) {
              queue.push(node.left)
          }
          if(node.right) {
              queue.push(node.right)
          }
      }
  }
  return map.size
};