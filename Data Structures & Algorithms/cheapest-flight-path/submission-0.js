class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        // Directed weighted graph
        // Adjacency list node => [dest, cost]
        // Map that keeps node => minCost to get there from path
        // Djikstra's BFS taking smallest cost, keep track of 
        // stops -> [currNode, currWeight, currTime]
        // If currTime < k break
        // Return cheapest totalcost or -1
        
        //Adj list
        const adjList = new Map();
        for(const [u,v,w] of flights){
            if(!adjList.has(u)){
                adjList.set(u,[])
            }
            adjList.get(u).push([v,w])
        }

        //Map min costs
        const map = new Map();

        for(let i = 0; i < n; i++){
            if(i != src){
                map.set(i,Infinity)
            } else {
                map.set(i,0);
            }
        }
        
        //BFS
        const seen = new Set();
        seen.add(src);
        const queue = [[src,0,0]]; // currNode, currWeight, currT
        while(queue.length > 0){
            const size = queue.length;
            for(let o = 0; o < size; o++){
                const [currNode, currWeight, currTime] = queue.shift();
                for(const [nei,weight] of adjList.get(currNode) || []){
                    const newWeight = currWeight + weight;
                    const newTime = currTime + 1;
                    if(nei == dst && newWeight < map.get(nei)){
                        map.set(nei, newWeight);
                    }
                    if(!seen.has(nei) && newWeight < map.get(nei)
                        && newTime <= k){
                        seen.add(nei);
                        map.set(nei, newWeight);
                        queue.push([nei,newWeight, newTime])
                    }
                }
            }
        }
        console.log(map)
        if(map.get(dst) == Infinity) return -1;

        return map.get(dst);
    }
}
