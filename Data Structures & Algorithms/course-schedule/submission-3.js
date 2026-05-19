class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // [a -> b] b needs to be taken
        // detect if there is cycle in undirected graph
        const adjacencyList = {};

        for(const [p,q] of prerequisites){
            if(!(p in adjacencyList)){
                adjacencyList[p] = []
            }

            if(!adjacencyList[p].includes(q)){
                adjacencyList[p].push(q);
            }
        }

        // console.log(adjacencyList)
        function DFS(curr,visiting){
            if(visited.has(curr)) return true;
            if(visiting.has(curr)) return false;

            visiting.add(curr);
            for(const nei of adjacencyList[curr] || []){
                if(!DFS(nei,visiting)) return false;
            }
            visited.add(curr);
            return true;
        }

        let visited = new Set();
        for(let i = 0; i <= numCourses; i++){
            if(!DFS(i,new Set())) return false;
        }

        return true;
    }
}
