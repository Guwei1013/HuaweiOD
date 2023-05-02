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
 * @return {number}
 */
var minDiffInBST = function (root) {
  const tree = [];
  const path = [];
  let node = root,
    min = Infinity;
  while (tree.length || node) {
    while (node) {
      tree.push(node);
      node = node.left;
    }

    node = tree.pop();
    path.push(node.val);

    node = node.right;
  }

  for (let i = 0; i < path.length - 1; i++) {
    min = Math.min(min, path[i + 1] - path[i]);
  }

  return min;
};
