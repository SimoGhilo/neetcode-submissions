class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let n = nums.length;

        let cache = {};  // Memoization cache

        var dfs = (currN) => {
            // Base case: If we've reached the last index, return true
            if (currN == n - 1) return true;

            // If we've already computed this index, return the cached result
            if (currN in cache) return cache[currN];

            // Try jumping to all reachable indices from currN
            for (let i = currN + 1; i <= currN + nums[currN] && i < n; i++) {
                if (dfs(i)) {
                    cache[currN] = true;  // If we can reach the last index from i, mark currN as reachable
                    return true;
                }
            }

            // If no path leads to the last index, mark currN as not reachable
            cache[currN] = false;
            return false;
        }

        return dfs(0);  // Start the DFS from index 0
    }
}
