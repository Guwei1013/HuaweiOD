/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  function isLeafNode(node) {
    return node.left === null && node.right === null;
  }
  function isPalindrome(str) {
    let left = 0, right = str.length - 1
    while(left < right) {
        if(str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
  }
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    let str = "";
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      str+=node.val
      const bol = !isLeafNode(node)
      if(node.left) {
        queue.push(node.left)
      } else if(bol) {
        queue.push({val: 0,})
      }
    }
    if(!isPalindrome(str)) {
      return false
    }
  }

  return true
};
