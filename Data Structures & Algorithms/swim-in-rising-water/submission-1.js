class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        //BFS + dijkstra's
        // short path within t time
        // queue [r,c,maxSeen so far]
        // Visit set
        // track max height of path to n-1 m-1
        const m = grid.length;
        const n = grid[0].length;
        
        const queue = [[0,0, grid[0][0]]]; // r , c maxSeen
        const directions = [[0,1], [0,-1], [1,0], [-1,0]];
        const seen = new Set();

        while(queue.length > 0){
            //mimic min heap behaviour
            queue.sort((a,b) => a[2] - b[2]);
            //Adjacency coor with maxWeight(height)
            const [row,col,maxSeen] = queue.shift();
            if(row == m - 1 && col == n - 1) return maxSeen;
            for(const [di,dj] of directions){
                const newRow = row + di;
                const newCol = col + dj;
                if(!seen.has(`${newRow}-${newCol}`) &&
                    newRow >= 0 && newCol >= 0 &&
                    newRow < m && newCol < n){
                    queue.push([newRow,newCol, Math.max(grid[newRow][newCol],maxSeen)]);
                    seen.add(`${newRow}-${newCol}`);
                }
            }

        }

    }
}
