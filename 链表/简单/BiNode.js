/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
  const stack = [],tree = []
  let node = root

  while (stack.length || node) {
      while (node) {
          stack.push(node)
          node = node.left
      }

      node = stack.pop()
      tree.push(node)
      node = node.right
  }

  let dummy = new TreeNode('')
  node = dummy

  for (let i=0; i<tree.length; i++) {
    tree[i].left = null
    tree[i].right = null
    node.right = tree[i]
    node = node.right
  }

  return dummy.right
};