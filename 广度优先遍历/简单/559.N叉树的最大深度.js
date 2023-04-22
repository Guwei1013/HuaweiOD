/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  const queue = [root]
  let depth = 0
  while(queue.length) {
      const len = queue.length
      for(let i=0; i<len; i++) {
          const node = queue.shift()
          queue.push(...node.children)
      }
      depth++
  }
  return depth
};