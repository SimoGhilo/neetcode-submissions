class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let directions = [[0,1], [0,-1], [1,0], [-1,0]];

        function DFS(i,j){
            if(i >= m || j >= n
             || i < 0 || j < 0 || grid[i][j] == '0') return;
            grid[i][j] = '0';
            for(const [di,dj] of directions){
                let newI = di + i;
                let newJ = dj + j;
                DFS(newI,newJ);
            }
        }

        let islands = 0;

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] == '1'){
                    islands++;
                    DFS(i,j)
                }
            }
        }

        return islands;
    }
}
