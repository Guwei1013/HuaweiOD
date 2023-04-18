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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const helper = (root, lower, upper) => {
    if (root === null) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }
    return (
      helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
    );
  };

  return helper(root, -Infinity, Infinity);
};

/**
 * 迭代
 * 二叉搜索树满足  left < root < right
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const path = [];
  let node = root,
    last = -Infinity;
  while (path.length || node) {
    while (node) {
      path.push(node);
      node = node.left;
    }
    const dummy = path.pop();
    if (last >= dummy.val) {
      return false;
    }
    last = dummy.val;
    node = dummy.right;
  }
  return true;
};
