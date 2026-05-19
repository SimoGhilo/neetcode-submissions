class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let directions = [[0,1],[0,-1], [1,0], [-1,0]];

        function BFS(i,j,seen){
            let queue = [[i,j,0]];  // i , j , currDistance

            while(queue.length > 0){
                let size = queue.length;
                for(let o = 0; o < size;o++){
                    let [currI,currJ,distance] = queue.shift();
                    if(grid[currI][currJ] == 0) return distance;
                    for(const [di,dj] of directions){
                        let newI = di + currI;
                        let newJ = dj + currJ;
                        if(newI >= 0 && newJ >= 0 
                        && newI < m && newJ < n 
                        && !seen.has(`${newI}-${newJ}`)
                        && grid[newI][newJ] != -1){
                            seen.add(`${newI}-${newJ}`)
                            queue.push([newI,newJ,distance + 1]);
                        }
                    }
                }
            }

            return 2147483647;
        }

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] == 2147483647){
                    let distance = BFS(i,j,new Set());
                    grid[i][j] = Math.min(distance, grid[i][j]);
                }
            }
        }

        return grid;
    }
}
