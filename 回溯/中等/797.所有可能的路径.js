/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const result = []

    function backtrack(index,path,result,graph) {
        if (index === graph.length - 1) {
            result.push(path.concat())
        }

        for (let i=0; i<graph[index].length; i++) {
            path.push(graph[index][i])
            backtrack(graph[index][i],path,result,graph)
            path.pop()
        }
    
    }

    backtrack(0, [0], result, graph)
    return result
};