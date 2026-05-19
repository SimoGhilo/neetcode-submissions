class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
       // Adjacency list sorted ord (sort input)
       // Undirected graph, can revisit node but no edge
       // DFS to construct result list, remove edges as
       // you go. when len of res == len of tickets + 1 stop
       // Backtracking ??
        tickets.sort((a,b) => a[1].localeCompare(b[1]));
        const map = new Map();
        for(const [u,v] of tickets){
            if(!map.has(u)){
                map.set(u,[])
            }
            map.get(u).push(v)
        }
        // console.log(map)
        const res = ['JFK'];
        function DFS(node){
            if(!node) return false;
            if(res.length === tickets.length + 1) return true;

            const neighbors = map.get(node);
            if(neighbors){
                for (let i = 0; i < neighbors.length; i++) {
                    const next = neighbors.splice(i, 1)[0]; // remove edge
                    res.push(next);

                    if (DFS(next)) return true; // proceed recursively

                    // backtrack if path fails
                    res.pop();
                    neighbors.splice(i, 0, next); // restore edge
                }
            }
            
            return false;

        }
        DFS('JFK')
        return res;
    }
}
