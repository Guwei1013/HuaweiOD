/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * 二叉搜索树满足  left < root < right
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const path = [];
  let flag = true;
  function dfs(node) {
    if (!flag) {
      return;
    }
    if (node.left) {
      dfs(node.left);
    }
    if (path[path.length - 1] >= node.val) {
      flag = false;
      return;
    } else {
      path.push(node.val);
    }
    if (node.right) {
      dfs(node.right);
    }
  }

  dfs(root);

  return flag;
};
