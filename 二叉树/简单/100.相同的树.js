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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const leftTree = [p], rightTree = [q]
  while(leftTree.length || rightTree.length) {
      const nodeL = leftTree.shift()
      const nodeR = rightTree.shift()
      if(nodeL === nodeR) continue
      if(nodeL === null || nodeR === null) return false
      if(nodeL.val !== nodeR.val) return false
      leftTree.push(nodeL.left)
      leftTree.push(nodeL.right)
      rightTree.push(nodeR.left)
      rightTree.push(nodeR.right)
  }

  return true
};


/**
 * 递归
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p === q) return true
  if(p === null || q === null) return false
  if(p.val !== q.val) return false
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};