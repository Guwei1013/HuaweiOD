/*
    开心消消乐
知识点编程基础深搜广搜

 时间限制：1s 空间限制：256MB 限定语言：不限

题目描述：
给定一个N行M列的二维矩阵，矩阵中每个位置的数字取值为0或1。矩阵示例如：
1 1 0 0
0 0 0 1
0 0 1 1
1 1 1 1
现需要将矩阵中所有的1进行反转为0，规则如下：
1）当点击一个1时，该1变被反转为0，同时相邻的上、下、左、右，以及左上、左下、右上、右下8个方向的1（如果存在1）均会自动反转为0；
2）进一步地，一个位置上的1被反转为0时，与其相邻的8个方向的1（如果存在1）均会自动反转为0；
按照上述规则示例中的矩阵只最少需要点击2次后，所有值均为0。请问，给定一个矩阵，最少需要点击几次后，所有数字均为0？

*/

function func(yLen,xLen,matrix) {
    let sum = 0
    const backtrack = (y,x) => {
        matrix[y][x] = 0
        // 上
        if(y-1>=0 && matrix[y-1][x]) {
            backtrack(y-1,x)
        }

        // 下
        if(y+1<yLen && matrix[y+1][x]) {
            backtrack(y+1,x)
        }

        // 左
        if(x-1>=0 && matrix[y][x-1]) {
            backtrack(y,x-1)
        }


        // 右
        if(x+1<xLen && matrix[y][x+1]) {
            backtrack(y,x+1)
        }

        // 左上
        if(x-1>=0 && y-1>=0 && matrix[y-1][x-1]) {
            backtrack(y-1,x-1)
        }

        // 右上
        if(x+1<xLen && y-1>=0 && matrix[y-1][x+1]) {
            backtrack(y-1,x+1)
        }

        // 左下
        if(x-1>=0 && y+1<yLen && matrix[y+1][x-1]) {
            backtrack(y+1,x-1)
        }

        // 右下
        if(x+1<xLen && y+1<yLen && matrix[y+1][x+1]) {
            backtrack(y+1,x+1)
        }
    }

    for(let y=0; y<yLen; y++) {
        for(let x=0; x<xLen; x++) {
            if(matrix[y][x]) {
                sum++
                backtrack(y,x)
            }
        }
    }
    return sum

}
console.log(func(3,3,
    [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
]
));
console.log(func(4,4,
    [
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
]
));