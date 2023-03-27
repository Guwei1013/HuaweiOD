/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const row = board.length, col = board[0].length;
    let flag = false;
    /**
     * 
     * @param {*} y 当前遍历到的元素纵坐标
     * @param {*} x 当前遍历到的元素横坐标
     * @param {*} len 当匹配到的长度
     * @returns 
     */
    function backtrack(y, x, len) {
        /* 防止重复访问 */ 
        board[y][x] = "";
        /* 匹配完毕 */ 
        if (len === word.length) {
            flag = true;
        }
        /* 避免后续不必要的回溯 */ 
        if (flag) {
            /* 防止产生副作用 */
            board[y][x] = word[len - 1];
            return;
        }

        // 上
        if (y - 1 >= 0 && board[y - 1][x] === word[len]) {
            backtrack(y - 1, x, len + 1);
        }

        // 右
        if (x + 1 < col && board[y][x + 1] === word[len]) {
            backtrack(y, x + 1, len + 1);
        }

        // 下
        if (y + 1 < row && board[y + 1][x] === word[len]) {
            backtrack(y + 1, x, len + 1);
        }

        // 左
        if (x - 1 >= 0 && board[y][x - 1] === word[len]) {
            backtrack(y, x - 1, len + 1);
        }

        /* 防止产生副作用 */ 
        board[y][x] = word[len - 1];
    }
    for (let y = 0; y < row; y++) {
        for (let x = 0; x < col; x++) {
            if (board[y][x] === word[0]) {
                backtrack(y, x, 1);
            }
        }
    }
    return flag;
};
