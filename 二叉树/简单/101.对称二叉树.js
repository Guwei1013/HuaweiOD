/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 迭代
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function isSomeTree(p, q) {
    const leftTree = [p];
    const rightTree = [q];
    while (leftTree.length || rightTree.length) {
      const nodeL = leftTree.shift();
      const nodeR = rightTree.shift();
      if (nodeL === nodeR) continue;
      if (nodeL === null || nodeR === null) return false;
      if (nodeL.val !== nodeR.val) return false;
      leftTree.push(nodeL.left);
      leftTree.push(nodeL.right);
      rightTree.push(nodeR.right);
      rightTree.push(nodeR.left);
    }
    return true;
  }

  return isSomeTree(root.left, root.right);
};


/**
 * 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function isSomeTree(p,q) {
      if(p === q) return true
      if(p === null || q == null) return false
      if(p.val !== q.val) return false
      return isSomeTree(p.left,q.right) && isSomeTree(p.right,q.left)
  }

  return isSomeTree(root.left,root.right)
};