/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 自顶向下翻转
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  const leftTree = root.left;
  const rightTree = root.right;
  root.left = rightTree;
  root.right = leftTree;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

/**
 * 自底向上翻转
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  const leftTree = invertTree(root.left);
  const rightTree = invertTree(root.right);

  root.left = rightTree;
  root.right = leftTree;

  return root;
};
