/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.combines = []
    this.index = 0
    function bakctrack(index,path,options,result,len) {
        if(path.length === len) {
            result.push(path)
        } 
        for(let i=index; i<options.length; i++) {
            bakctrack(i+1,path+options[i],options,result,len)
        }
    }
    bakctrack(0,'',characters,this.combines,combinationLength)
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    if(this.hasNext()) {
        const val = this.combines[this.index]
        this.index++
        return val
    }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.index < this.combines.length
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */