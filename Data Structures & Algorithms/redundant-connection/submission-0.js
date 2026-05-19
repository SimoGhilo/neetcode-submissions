class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        // Union find, find the root of each component
        // If root of connection already connected, return it#
        function findParent(x) {
            let parent = DSU[x];
            if (parent !== x) {
                DSU[x] = findParent(DSU[x]);
            }
            return DSU[x];
        }

        function union(x, y) {
            const rootX = findParent(x);
            const rootY = findParent(y);
            if (rootX === rootY) {
                return false;  // A cycle is found
            }
            DSU[rootY] = rootX;  // Union
            return true;
        }

        const n = edges.length;
        const DSU = new Array(n + 1);
        for (let i = 1; i <= n; i++) {
            DSU[i] = i;
        }

        for(const [u,v] of edges){
            if(!union(u,v)) return [u,v]
        }
        
    }
}
