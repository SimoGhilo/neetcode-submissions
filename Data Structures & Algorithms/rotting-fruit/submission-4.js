class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const m = grid.length;
        const n = grid[0].length;
        let fresh = 0;

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] == 1){
                    fresh++;
                }
            }
        }

        let queue = []; 

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] == 2){
                    queue.push([i,j])
                }
            }
        }

        let minutes = 0;
        const directions = [[0,1],[0,-1],[1,0],[-1,0]];
        let seen = new Set();

        while(queue.length > 0){
            let size = queue.length;
            let flag = false;
            for(let o = 0; o < size; o++){
                let [currI,currJ] = queue.shift();
                for(const [di,dj] of directions){
                    let newI = di + currI;
                    let newJ = dj + currJ;
                    if(newI >= 0 && newJ >= 0
                    && newJ < n && newI < m
                    && grid[newI][newJ] == 1
                    && !seen.has(`${newI}-${newJ}`)){
                        flag = true;
                        fresh--;
                        seen.add(`${newI}-${newJ}`);
                        queue.push([newI,newJ])
                    }
                }
            }
            if(flag){
                minutes++;
            }
        }

        if(fresh > 0) return -1;
        return minutes;
    }
}
