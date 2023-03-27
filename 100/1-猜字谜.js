/*
    小王设计了一个简单的猜字谜游戏，游戏的谜面是一个错误的单词，比如nesw，玩家需要猜出谜底库中正确的单词。猜中的要求如下：
        对于某个谜面和谜底单词，满足下面任一条件都表示猜中：
        1）变换顺序以后一样的，比如通过变换w和e的顺序，“nwes”跟“news”是可以完全对应的；
        2）字母去重以后是一样的，比如“woood”和“wood”是一样的，它们去重后都是“wod
    请用js实现对应的算法，并带有注释
*/


function isSomeWord(wordSet,otherWord) {
    if(wordSet.size !== otherWord.size) return false
    for(const str of otherWord) {
        // 如果模板中没有返回
        if(!wordSet.has(str)) return false
    }
    return true
}


function func(word,wordList = ['wood', 'news', 'east', 'south', 'north']) {
    const result = []
    // 获取一个无重复的模板
    const set = new Set(word.split('')) 
    for(const val of wordList) {
        if(isSomeWord(set,new Set(val.split('')))) {
            result.push(val)
        }
    }
    return result
}
console.log(func('woood'))
console.log(func('snew'))