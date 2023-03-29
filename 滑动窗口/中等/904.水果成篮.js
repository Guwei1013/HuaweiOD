/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let category = new Set()
    let left = 0,right = 0,max = 1,last = 0
    while(right < fruits.length) {
        /* 没有采摘过当前的水果 */
        if(!category.includes(fruits[right])) {
            if(category.size < 2) {
                category.add(fruits[right])
            } else {
                /* 重新划分边界 */ 
                left = last
                category = new Set([fruits[left],fruits[right]])
            }
        }

        /* 保证 last 记录最后一个水果种类连续出现的左边界 */ 
        if(fruits[last] !== fruits[right]) {
            last = right
        }

        right++
        max = Math.max(max,right - left) 
    }
    return max
};