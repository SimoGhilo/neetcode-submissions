class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        //adjacency list
        const adjacencyList = new Map();
        for(const [u,v] of edges){
            if(!adjacencyList.has(u)){
                adjacencyList.set(u, [])
            }
            if(!adjacencyList.has(v)){
                adjacencyList.set(v, [])
            }
            adjacencyList.get(u).push(v)
            adjacencyList.get(v).push(u)
        }
        
        //DFS
        function DFS(curr,parent,visiting){
            if(visited.has(curr)) return true;
            if(visiting.has(curr)) return false;
            visiting.add(curr);

            for(const nei of adjacencyList.get(curr) || []){
                if(nei == parent) continue;
                if(!DFS(nei,curr,visiting)) return false;
            }

            visited.add(curr);
            return true;
        }

        const visited = new Set();

        if(!DFS(0,null,new Set())) return false;

        return visited.size == n;
    }
}
