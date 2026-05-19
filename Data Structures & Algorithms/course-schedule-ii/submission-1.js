class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjacencyList = new Map();

        for(const [u,v] of prerequisites){
            if(!adjacencyList.has(u)){
                adjacencyList.set(u,[]);
            }
            adjacencyList.get(u).push(v);
        }

        function DFS(curr,visiting){
            if(visited.has(curr)) return true;
            if(visiting.has(curr)) return false;
            visiting.add(curr);

            for(const nei of adjacencyList.get(curr) || []){
                if(!DFS(nei,visiting)) return false;
            }
                
            if(!result.includes(curr)){
                result.push(curr);
            }
            
            visited.add(curr);
            return true;
        }

        const result = [];
        const visited = new Set();

        for(let i = 0; i < numCourses; i++){
            if(!DFS(i,new Set())) return [];
        }
        
        return result;
    }
}
