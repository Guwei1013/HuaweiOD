/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const arr = new Array(26).fill(0)
    const result = []
    const code = 'A'.codePointAt()
    for(const val of tiles) {
       arr[val.codePointAt() - code]++
    }

    function backtrack(arr,path) {
        for(let i=0; i<arr.length; i++) {
            if (arr[i] === 0) {
                continue;
            }
            result.push(path)
            arr[i]--
            backtrack(arr,path+arr[i])
            arr[i]++
        }
        result.push()
    }
    backtrack(arr,'')
    return result.length

};