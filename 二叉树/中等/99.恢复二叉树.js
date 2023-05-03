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
var recoverTree = function (root) {
  const tree = [];
  function dfs(node) {
    if (node.left) {
      dfs(node.left);
    }

    tree.push(node);

    if (node.right) {
      dfs(node.right);
    }
  }

  dfs(root);
  let a = null,
    b = null;
  for (let i = 0; i < tree.length - 1; i++) {
    if (tree[i].val > tree[i + 1].val) {
      b = tree[i + 1];
      if (a === null) {
        a = tree[i];
      }
    }
  }

  if (a && b) {
    const val = a.val;
    a.val = b.val;
    b.val = val;
  }
};
