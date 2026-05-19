class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjacencyList = new Map();

        for(const [u,v] of edges){
            if(!adjacencyList.has(u)){
                adjacencyList.set(u,[]);
            }
            if(!adjacencyList.has(v)){
                adjacencyList.set(v,[]);
            }
            adjacencyList.get(u).push(v);
            adjacencyList.get(v).push(u);
        }

        let components = 0;
        const seen = new Set();

        function DFS(node){
            if(seen.has(node)) return false;
            seen.add(node);
            for(const nei of adjacencyList.get(node) || []){
                if(!seen.has(nei)){
                    DFS(nei)
                }
            }
            return true;
        }

        for(let i = 0; i < n; i++){
            if(DFS(i)) components++;
        }

        return components;
    }
}
