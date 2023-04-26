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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const queue = [root]
  let xParent = null, xDepth = 0, yParent = null,yDepth = 0
  let depth = 1

  function updateX(val, node) {
    if(val === x) {
      xParent = node
      xDepth = depth
    }
  }

  function updateY(val, node) {
    if(val === y) {
      yParent = node
      yDepth = depth
    }
  }

  while(queue.length) {
      const len = queue.length
      for (let i=0; i<len; i++) {
          const node = queue.shift()
          if(node.left) { 
            queue.push(node.left)
            const val = node.left.val
            updateX(val, node)
            updateY(val, node)
          }
          if(node.right) {
            queue.push(node.right)
            const val = node.right.val
            updateX(val, node)
            updateY(val, node)
          }
      }
      depth++
  }

  return xDepth === yDepth && xParent !== yParent
};



// 深度
var isCousins = function(root, x, y) {
  let xParent = null, xDepth = 0, yParent = null,yDepth = 0

  function updateX(val, depth, node) {
    if(val === x) {
      xParent = node
      xDepth = depth
    }
  }

  function updateY(val, depth, node) {
    if(val === y) {
      yParent = node
      yDepth = depth
    }
  }
  function dfs(node, depth) {
    if(node.left) {   
        updateX(node.left.val, depth, node)
        updateY(node.left.val, depth, node)
        dfs(node.left, depth+1)
    }
    if(node.right) {
        updateX(node.right.val, depth, node)
        updateY(node.right.val, depth, node)
        dfs(node.right, depth+1)
    }
  }

   dfs(root,1)

  

  return xDepth === yDepth && xParent !== yParent
};
