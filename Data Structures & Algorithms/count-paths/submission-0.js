class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // Initialize a 2D array with dimensions m x n filled with 0
        let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

        // Set the first row and the first column to 1
        for (let i = 0; i < m; i++) {
            dp[i][0] = 1;
        }
        for (let j = 0; j < n; j++) {
            dp[0][j] = 1;
        }

        // Calculate the number of unique paths for each cell
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];  // The result is in the bottom-right corner
    }
}

// Exampl
