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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {

  const path = []
  const map = new Map()
  let result = false
  function dfs(node) {
      if(result) return
      if (node.left) {
          dfs(node.left)
      }
      if(map.has(k - node.val)) {
          result = true
          return
      }
      map.set(node.val,1)
      path.push(node.val)
      if(node.right) {
          dfs(node.right)
      }
  }
  dfs(root)
  return false
};



/**
 * 广度优先遍历 
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const queue = []
  const map = new Map()
  let node = root 
  while(queue.length || node) {
      while(node) {
          queue.push(node)
          node = node.left
      }
      node = queue.pop()
      if(map.has(k - node.val)) {
          return true
      } else {
          map.set(node.val, 1)
      }
     node = node.right
  }
  return false
};