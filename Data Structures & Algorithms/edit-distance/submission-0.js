class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        let m = word1.length;
        let n = word2.length;

        // Create a dp table for memoization, initialized to -1 (representing uncomputed values)
        let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(-1));

        // Helper recursive function with memoization
        const dfs = (i, j) => {
            // Base cases
            if (i === m) return n - j; // If word1 is exhausted, insert all remaining characters from word2
            if (j === n) return m - i; // If word2 is exhausted, remove all remaining characters from word1

            // If this subproblem has already been solved, return the cached result
            if (dp[i][j] !== -1) return dp[i][j];

            // If characters match, no operation is needed, just move on
            if (word1[i] === word2[j]) {
                dp[i][j] = dfs(i + 1, j + 1);
            } else {
                // Calculate the minimum cost for each operation (insert, delete, substitute)
                dp[i][j] = Math.min(
                    dfs(i + 1, j) + 1,   // Deletion
                    dfs(i, j + 1) + 1,   // Insertion
                    dfs(i + 1, j + 1) + 1 // Substitution
                );
            }

            return dp[i][j];
        };

        // Call the dfs function starting from the beginning of both words
        return dfs(0, 0);
    }
}
