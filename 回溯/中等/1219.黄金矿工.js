var getMaximumGold = function(grid) {
    let maxValue = 0
    const visited = new Set()

    function backtrack(y,x,row,col,val,visited) {
        visited.add(`${y},${x}`)
        let curMax = val 

        /* 上 */
        if(y-1>=0 && grid[y-1][x] !== 0 && !visited.has(`${y-1},${x}`)) {
            curMax = Math.max(val,backtrack(y-1,x,row,col,val+grid[y-1][x],visited))
        }
        /* 下 */
        if(y+1<row && grid[y+1][x] !== 0 && !visited.has(`${y+1},${x}`)) {
            curMax = Math.max(val,backtrack(y+1,x,row,col,val+grid[y+1][x],visited))
        }

        /* 左 */
        if(x-1>=0 && grid[y][x-1] !== 0 && !visited.has(`${y},${x-1}`)) {
            curMax = Math.max(val,backtrack(y,x-1,row,col,val+grid[y][x-1],visited))
        }

        /* 右 */
        if(x+1<col && grid[y][x+1] !== 0 && !visited.has(`${y},${x+1}`)) {
            curMax = Math.max(val,backtrack(y,x+1,row,col,val+grid[y][x+1],visited))
        }
        visited.delete(`${y},${x}`)
        return curMax
    }

    for(let y=0; y<grid.length; y++) {
        for(let x=0; x<grid[y].length; x++) {
            if(grid[y][x] !== 0 && !visited.has(grid[y][x])) {
                maxValue = Math.max(maxValue,backtrack(y, x, grid.length, grid[y].length,grid[y][x],visited))
            }
        }
    }

    return maxValue
};

console.log(getMaximumGold([
    [1,0,7,0,0,0],
    [2,0,6,0,1,0],
    [3,5,6,7,4,2],
    [4,3,1,0,2,0],
    [3,0,5,0,20,0]
]))