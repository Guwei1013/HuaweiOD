/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  const tree = [root]
  const path  =[]
  while (tree.length) {
    const len = tree.length
    const index = path.length
    path[index] = [] 
    for (let i=0; i<len; i++) {
      const node = tree.shift()
      path[index].push(node.val)
      if(node.left) {
        tree.push(node.left)
      }

      if(node.right) {
        tree.push(node.right)
      }
    }
  }

  return path
};