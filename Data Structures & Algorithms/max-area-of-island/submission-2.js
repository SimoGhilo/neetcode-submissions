class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        let maxArea = 0;
        let m = grid.length;
        let n = grid[0].length;

        // Helper function to explore the area of the island using DFS
        function dfs(r, c) {
            // Check if the cell is out of bounds or water (0)
            if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] == 0) return 0;

            // Mark the cell as visited by setting it to 0
            grid[r][c] = 0;

            // Start with the current cell and explore in all four directions
            let area = 1; // the current land cell counts as 1
            area += dfs(r + 1, c); // Down
            area += dfs(r - 1, c); // Up
            area += dfs(r, c + 1); // Right
            area += dfs(r, c - 1); // Left

            return area; // Return the total area of the island
        }

        // Loop through the entire grid
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                // If we find land (1), start DFS to calculate the island area
                if (grid[i][j] == 1) {
                    maxArea = Math.max(maxArea, dfs(i, j)); // Update maxArea
                }
            }
        }

        return maxArea; // Return the largest island area found
    }
}
