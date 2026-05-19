class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let minutes = 0;

        const m = grid.length;
        const n = grid[0].length;

        // Count fresh oranges and initialize the queue with rotten oranges
        let fresh = 0;
        const queue = [];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    fresh++;
                } else if (grid[i][j] === 2) {
                    queue.push([i, j]);
                }
            }
        }

        // If there are no fresh oranges, return 0
        if (fresh === 0) return 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        while (queue.length > 0) {
            let queueSize = queue.length;
            let freshRotted = false;

            for (let i = 0; i < queueSize; i++) {
                const [r, c] = queue.shift();

                for (const [dr, dc] of directions) {
                    const newR = r + dr;
                    const newC = c + dc;

                    // Check bounds and if the orange is fresh
                    if (newR >= 0 && newR < m && newC >= 0 && newC < n && grid[newR][newC] === 1) {
                        grid[newR][newC] = 2; // Rot the orange
                        queue.push([newR, newC]); // Add to queue
                        fresh--; // Decrease fresh count
                        freshRotted = true;
                    }
                }
            }

            // Increment minutes only if fresh oranges were rotted in this round
            if (freshRotted) minutes++;
        }

        // If there are still fresh oranges left, return -1
        return fresh > 0 ? -1 : minutes;
    }
}
