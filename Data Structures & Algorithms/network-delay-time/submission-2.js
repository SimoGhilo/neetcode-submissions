class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // directed and weighted graph
        // Adjacency List u => [v, time]
        // BFS [currNode,currTime, path] keep track of minTime extern
        const map = new Map();
        for(const [u,v,t] of times){
            if(!map.has(u)){
                map.set(u,[]);
            }
            map.get(u).push([v,t])
        }

        const queue = [[k,0]]

        const mapTimes = new Map();
        
        for(let i = 1; i <= n; i++){
            if(i == k){
                mapTimes.set(i, 0);
                continue;
            }
            mapTimes.set(i, Infinity);
        }

        while(queue.length > 0){
            const size = queue.length;
            for(let o = 0; o < size; o++){
                const [currNode, currTime] = queue.shift();
                for(const [nei,time] of map.get(currNode) || []){
                    if((currTime + time) < mapTimes.get(nei)){
                        mapTimes.set(nei, Math.min(mapTimes.get(nei),currTime + time))
                        queue.push([nei, currTime + time]);
                    }
                }
            }
        }
        
        console.log(mapTimes)
        if([...mapTimes.values()].some((v) => v == Infinity)) return -1;

        if(mapTimes.size != n) return -1;
        return Math.max(...mapTimes.values());
    }
}
