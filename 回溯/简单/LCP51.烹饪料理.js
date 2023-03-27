/**
 * @param {number[]} materials
 * @param {number[][]} cookbooks
 * @param {number[][]} attribute
 * @param {number} limit
 * @return {number}
 */
var perfectMenu = function(materials, cookbooks, attribute, limit) {
    let max = -1
    /**
     * @param {number[]} food 当前剩余的食材
     * @param {number[]} books 当前的菜谱
     * @returns {boolean}
     */
    function canCook(food,book) {
        for(let i=0; i<book.length; i++) {
            if(book[i] > food[i]) return false
        }
        return true
    }
    /**
     * @param {number[]} foods 当前剩余的食材
     * @param {number[][]} books 当前剩余的菜谱
     * @param {number[]} attribute 当前剩余菜谱对应的美味度和饱腹度
     * @param {number} sum 当前的饱腹度
     * @param {number} tast 当前的美味度
     */
    function backtrack(foods, books, attribute, sum, tast) {
        /* 饱和度满足，比较美味度 */ 
        if(sum >= limit) max = Math.max(max,tast)

        /* 列举菜谱 */ 
        for(let i=0; i<books.length; i++) {
            /* 判断菜谱是否可以使用 */ 
            if(canCook(foods,books[i])) {
                /* 
                    菜谱只能用一次，菜谱减少，食材减少，
                    我们只需要当之后菜谱，之前不需要考虑
                */ 
                backtrack(foods.map((val,index) => val - books[i][index]),books.slice(i+1),attribute.slice(i+1),sum+attribute[i][1],tast+attribute[i][0])
            }
        }
    }
    backtrack(materials,cookbooks,attribute,0,0)
    return max
};