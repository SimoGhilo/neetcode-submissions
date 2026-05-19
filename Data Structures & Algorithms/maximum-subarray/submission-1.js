class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length;
        let cache = new Array(n);  // Cache for memoization

        var dfs = (index) => {
            // Base case: If we reach the last index, return the current element itself
            if (index >= n) return 0;

            // If already computed, return the cached result
            if (cache[index] !== undefined) {
                return cache[index];
            }

            // Recursively calculate the maximum subarray sum from the next index
            let next = dfs(index + 1);

            // Option 1: Add the current element to the ongoing subarray sum
            // Option 2: Start a new subarray from the current element
            let result = Math.max(nums[index], nums[index] + next);

            // Cache the result for the current index
            cache[index] = result;

            return result;
        };

        // Start the DFS from index 0
        let maxSum = -Infinity;
        for (let i = 0; i < n; i++) {
            maxSum = Math.max(maxSum, dfs(i));
        }
        return maxSum;
    }
}
