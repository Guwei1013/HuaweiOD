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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  const path = [];
  function dfs(node) {
    if (node.left) {
      dfs(node.left);
    }
    path.push(node.val);
    if (node.right) {
      dfs(node.right);
    }
  }
  dfs(root);
  return path;
};
