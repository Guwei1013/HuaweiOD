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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const result = [];
    function backtrack(node, path) {
      // 叶子结点退出
      if (node.left === null && node.right === null) {
        result.push(path.join("->"));
        return;
      }
  
      // 遍历左节点
      if (node.left) {
        path.push(node.left.val)
        backtrack(node.left, path);
        path.pop()
      }
  
      // 遍历右节点
      if (node.right) {
        path.push(node.right.val)
        backtrack(node.right, path);
        path.pop()
      }

    }
    backtrack(root, [root.val]);
    return result;
  };
  