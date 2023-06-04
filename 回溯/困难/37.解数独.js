/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 判断某行有没有出现过即将要选择的数字 二维数组，row[row][i] 表示第 row 行出现过 i+1 嘛
  const row = Array.from({ length: 9 }, () => new Array(9).fill(false));
  // 判断某列有没有出现过即将要选择的数字 二维数组，col[col][i] 表示第 col 列出现过 i+1 嘛
  const col = Array.from({ length: 9 }, () => new Array(9).fill(false));
  // 判断某区域有没有出现过即将要选择的数字
  const block = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => Array(9).fill(false))
  );

  const spaces = [];
  let valid = false;
  for (let y = 0; y < 9; y++) {
    const i = Math.floor(y / 3);
    for (let x = 0; x < 9; x++) {
      if (board[y][x] !== ".") {
        const val = +board[y][x];
        const j = Math.floor(x / 3);
        row[y][val - 1] = true;
        col[x][val - 1] = true;
        block[i][j][val - 1] = true;
      } else {
        spaces.push([x, y]);
      }
    }
  }

  const dfs = (index) => {
    if (index === spaces.length) {
      valid = true;
      return;
    }

    const [x, y] = spaces[index];
    const i = Math.floor(y / 3);
    const j = Math.floor(x / 3);
    for (let val = 0; val < 9; val++) {
      if (
        row[y][val] === false &&
        col[x][val] === false &&
        block[i][j][val] === false
      ) {
        row[y][val] = true;
        col[x][val] = true;
        block[i][j][val] = true;
        board[y][x] = String(val + 1);
        dfs(index + 1);
        row[y][val] = false;
        col[x][val] = false;
        block[i][j][val] = false;
      }

      if (valid) return;
    }
  };

  dfs(0);
};
