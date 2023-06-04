/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const col = new Array(n).fill(false);
  const result = [];

  const isVaild = (x, y, matrix) => {
    // 正上方
    if (col[x]) {
      return false;
    }

    let i = y - 1,
      j = x - 1;
    // 左上方
    while (i >= 0 && j >= 0) {
      if (matrix[i][j] === "Q") {
        return false;
      }
      i--;
      j--;
    }

    (i = y - 1), (j = x + 1);
    // 右上方
    while (i >= 0 && j < n) {
      if (matrix[i][j] === "Q") {
        return false;
      }
      i--;
      j++;
    }
    return true;
  };

  const dfs = (path) => {
    if (path.length === n) {
      result.push(path.concat());
      return;
    }

    const row = new Array(n).fill(".");
    const y = path.length;
    for (let i = 0; i < n; i++) {
      if (isVaild(i, y, path)) {
        row[i] = "Q";
        col[i] = true;
        path.push(row.join(""));
        dfs(path);
        path.pop();
        col[i] = false;
        row[i] = ".";
      }
    }
  };

  dfs([]);
  return result;
};
