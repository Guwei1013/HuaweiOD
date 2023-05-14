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
var findMode = function (root) {
  const map = new Map(),
    set = new Set([]);

  let maxCount = 0;
  function dfs(node) {
    if (node.left) {
      dfs(node.left);
    }

    let count = 0;
    if (map.has(node.val)) {
      count = map.get(node.val);
    }
    map.set(node.val, count + 1);
    if (count + 1 > maxCount) {
      maxCount = count + 1;
      set.clear();
      set.add(node.val);
    } else if (count + 1 === maxCount) {
      set.add(node.val);
    }

    if (node.right) {
      dfs(node.right);
    }
  }

  dfs(root);

  return Array.from(set);
};
