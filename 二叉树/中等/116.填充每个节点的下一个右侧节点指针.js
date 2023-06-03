/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 层序遍历
 * 时间O(n) 空间O(n)
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (i !== len - 1) {
        node.next = queue[0];
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return root;
};

/**
 * 
 * 时间O(n) 空间O(1)
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root) {
    let pre = root;
    while (pre.left) {
      let node = pre;
      while (node) {
        node.left.next = node.right;
        if (node.next) {
          node.right.next = node.next.left;
        }
        node = node.next;
      }
      pre = pre.left;
    }
  }

  return root;
};




/**
 * 递归
 * 时间O(n) 空间O(1)
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(root === null) return root
  // 叶子节点
  if(root.left === null && root.right === null) return root
  root.left.next = root.right
  if (root.next) {
    root.right.next = root.next.left
  }
  connect(root.left)
  connect(root.right)
  return root
};