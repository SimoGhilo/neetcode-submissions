class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let map = new Map();

        for(const [v1,v2] of edges){
            if(!map.has(v1)){
                map.set(v1, [])
            }
            if(!map.has(v2)){
                map.set(v2, [])
            }
            map.get(v1).push(v2);
            map.get(v2).push(v1);
        }

        let set = new Set()

        var dfs = (currN,visited) => {
            if(currN >= n) return;
            if(visited.has(currN)) return;

            visited.add(currN);
            for(const vertex of map.get(currN) || []){
                    dfs(vertex,visited)
            }

        }

        let ret = 0;
        
        for(let i = 0; i < n; i++){
            if(!set.has(i)){
                ret++;
                dfs(i,set)
            }
        }

        return ret;
    }
}
