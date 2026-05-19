class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let m = heights.length;
        let n = heights[0].length;

        // Sets to track reachable cells for each ocean
        let setPac = new Set();
        let setAtl = new Set();

        // Visited matrices for both oceans
        let visitedPac = new Array(m).fill(false).map(() => new Array(n).fill(false));
        let visitedAtl = new Array(m).fill(false).map(() => new Array(n).fill(false));

        // Directions for up, down, left, right
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        // DFS function to explore reachable cells from the given ocean
        const dfs = (r, c, visited, setOcean, prevHeight) => {
            if (r < 0 || c < 0 || r >= m || c >= n || visited[r][c] || heights[r][c] < prevHeight) {
                return;
            }
            visited[r][c] = true;
            setOcean.add(`${r},${c}`); // Add cell to the ocean set

            // Explore the four possible directions
            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc, visited, setOcean, heights[r][c]);
            }
        };

        // Perform DFS starting from Pacific Ocean borders (first row and first column)
        for (let i = 0; i < m; i++) {
            dfs(i, 0, visitedPac, setPac, -Infinity); // Pacific: first column
            dfs(i, n - 1, visitedAtl, setAtl, -Infinity); // Atlantic: last column
        }
        for (let j = 0; j < n; j++) {
            dfs(0, j, visitedPac, setPac, -Infinity); // Pacific: first row
            dfs(m - 1, j, visitedAtl, setAtl, -Infinity); // Atlantic: last row
        }

        // Intersect the sets and convert to array of coordinates
        let result = [];
        for (let item of setPac) {
            if (setAtl.has(item)) {
                result.push(item.split(',').map(Number));
            }
        }

        return result;
    }
}
