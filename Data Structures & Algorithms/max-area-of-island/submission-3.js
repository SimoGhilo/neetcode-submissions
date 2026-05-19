class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let m = grid.length;
        let n = grid[0].length;

        function DFS(i,j,seen){
            if(i < 0 || j < 0 || i >= m 
            || j >= n || seen.has(`${i}-${j}`) 
            || grid[i][j] == 0) return 0;

            seen.add(`${i}-${j}`)

            let area = (
                DFS(i + 1, j, seen) +
                DFS(i - 1, j, seen) +
                DFS(i, j + 1, seen) +
                DFS(i, j - 1, seen)
            )

            return area + 1;

        }
        
        let maxArea = 0;
        
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] == 1){
                    let area = DFS(i,j,new Set());
                    maxArea = Math.max(area,maxArea);
                }
            }
        }

        return maxArea;
    }
}
