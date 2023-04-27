/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const row = board.length - 1;
  const col = board[0].length - 1;
  const option = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  function canMove(x, y) {
    return x >= 0 && x <= col && y >= 0 && y <= row && board[y][x] === "O";
  }

  for (let y = 0; y <= row; y++) {
    const queue = [];
    if (board[y][0] === "O") {
      queue.push([0, y]);
      board[y][0] = "A"
    }
    if (board[y][col] === "O") {
      queue.push([col, y]);
      board[y][col] = "A"
    }
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < option.length; i++) {
        const [dx, dy] = option[i];
        const nextX = dx + x;
        const nextY = dy + y;
        if (canMove(nextX, nextY)) {
          queue.push([nextX, nextY]);
          board[nextY][nextX] = 'A'
        }
      }
    }
  }

  for (let x = 0; x <= col; x++) {
    const queue = [];
    if (board[0][x] === "O") {
      queue.push([x, 0]);
      board[0][x] = "A";
    }
    if (board[row][x] === "O") {
      queue.push([x, row]);
      board[row][x] = "A";
    }
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < option.length; i++) {
        const [dx, dy] = option[i];
        const nextX = dx + x;
        const nextY = dy + y;
        if (canMove(nextX, nextY)) {
          queue.push([nextX, nextY]);
          board[nextY][nextX] = "A";
        }
      }
    }
  }

  for (let y = 0; y <= row; y++) {
    for (let x = 0; x <= col; x++) {
      if (board[y][x] === "A") {
        board[y][x] = "O";
      } else if (board[y][x] === "O") {
        board[y][x] = "X";
      }
    }
  }

  return board;
};
