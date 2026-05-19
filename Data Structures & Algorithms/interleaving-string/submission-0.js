class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        let m = s1.length;
        let n = s2.length;
        let target = s3.length;

        // If the combined lengths don't match, return false immediately
        if (m + n !== target) return false;

        // Create a cache to store results of subproblems
        let cache = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));

        // Base case: If both s1 and s2 are exhausted, we have a valid interleaving
        cache[m][n] = true;

        // Memoization DFS function
        var dfs = (i, j) => {
            // If the result is already computed, return it from the cache
            if (cache[i][j] !== false) return cache[i][j];

            // Check if the current character in s1 matches the corresponding character in s3
            if (i < m && s1[i] === s3[i + j]) {
                cache[i][j] = dfs(i + 1, j); // Move forward in s1
            }

            // Check if the current character in s2 matches the corresponding character in s3
            if (j < n && s2[j] === s3[i + j]) {
                cache[i][j] = cache[i][j] || dfs(i, j + 1); // Move forward in s2
            }

            return cache[i][j];
        }

        return dfs(0, 0);  // Start from the beginning of both strings
    }
}
