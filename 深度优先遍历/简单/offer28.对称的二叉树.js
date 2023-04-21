/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归解法
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function check(nodeL, nodeR) {
    if (nodeL === null && nodeR === null) return true;
    if (nodeL === null || nodeR === null) return false;
    if (nodeL.val !== nodeR.val) return false;
    return check(nodeL.left, nodeR.right) && check(nodeR.left, nodeL.right);
  }

  return check(root, root);
};



/**
 * 广度优先遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const queueL = [root],
    queueR = [root];
  while (queueL.length) {
    const nodeL = queueL.pop();
    const nodeR = queueR.pop();
    if (nodeL === null && nodeR === null) continue;
    if (nodeL === null || nodeR === null) return false;
    if (nodeL.val !== nodeR.val) return false;
    queueL.push(nodeL.left);
    queueR.push(nodeR.right);

    queueL.push(nodeL.right);
    queueR.push(nodeR.left);
  }

  return true;
};