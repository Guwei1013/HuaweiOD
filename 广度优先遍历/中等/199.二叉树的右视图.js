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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const path = [];
  const tree = [root];
  if (!root) return path;
  while (tree.length) {
    const len = tree.length - 1;
    path.push(tree[len].val);
    for (let i = 0; i <= len; i++) {
      const node = tree.shift();
      if (node.left) {
        tree.push(node.left);
      }
      if (node.right) {
        tree.push(node.right);
      }
    }
  }

  return path;
};

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
var rightSideView = function (root) {
  const path = [];
  if (!root) return path;

  function dfs(node, depth) {
    if (path.length < depth) {
      path.push(node.val);
    }

    if (node.right) {
      dfs(node.right, depth + 1);
    }

    if (node.left) {
      dfs(node.left, depth + 1);
    }
  }

  dfs(root, 1);

  return path;
};
