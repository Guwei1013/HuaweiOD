/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return
  const tree = []
  function dfs(node) {
      tree.push(node)
      const left = node.left
      const right = node.right
      node.left = null
      node.right = null

      if(left) {
          dfs(left)
      }

      if(right) {
          dfs(right)
      }
  }
  dfs(root)

  for (let i=0; i<tree.length-1; i++) {
      tree[i].right = tree[i+1]
  }
};