function maxDepth(root) {
    if (root === null) {
      return 0;
    } else {
      let leftHeight = maxDepth(root.left);
      let rightHeight = maxDepth(root.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  