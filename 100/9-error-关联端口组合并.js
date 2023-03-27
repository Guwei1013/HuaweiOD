/*
    关联端口组合并
    时间限制：1s 空间限制：256MB 限定语言：不限

    题目描述：
    有M（1<=M<=10）个端口组，每个端口组是长度为N(1<=N<=100)的整数数组，
    如果端口组间存在2个及以上不同端口相同，则认为这两个端口组互相关联，可以合并。
    第一行输入端口组个数M，再输入M行，每行逗号分隔，代表端口组，输出合并后的端口组用二维数组表示

    输入描述：
    端口组内数字可以重复
    输出描述：
    1.组内相同端口仅保留一个，从小到大排序。
    2.组外顺序保持输入顺序
    补充说明：
    M，N不再限定范围内，统一输出一组空数组[[]]

    示例1
    输入：
    4

    4
    2,3,2
    1,2
    5

    输出：
    [[4],[2,3],[1,2],[5]]

    说明：仅有一个端口2相同，不可以合并

    示例2
    输入：
    3

    2,3,1
    4,3,2
    5

    输出：
    [[1,2,3,4],[5]]

    说明：
    存在两个2,3有交集，可以合并

    示例3
    输入：
    6

    10
    4,2,1
    9
    3,6,9,2
    6,3,4
    8

    输出：
    [[10],[1,2,3,4,6,9],[9],[8]]

    示例4
    输入：
    11

    输出：
    [[]]

    说明：
    11超出范围，输出[[]]


*/

function isLikeArray(arr1,arr2) {
    const set =  new Set(arr1.concat(arr2)) 
    if(arr1.length + arr2.length >= set.size + 2 ) {
        return Array.from
    } 
    return []
}


function func(len,list) {
    if(len > 10) return [[]]
    const result = []
    for(let i=0; i<list.length; i++) {
        if(list[i].length < 2) {
            result.push(list[i])
            continue
        }
        for(let j=i+1; j<list.length; j++) {
            const cur = isLikeArray()
        }
    } 
}
console.log(func(6,[
    [10],
    [4,2,1],
    [9],
    [3,6,9,2],
    [6,3,4]
    [8]
]));
console.log(func("ab bcd ef", "cbd fe"));
