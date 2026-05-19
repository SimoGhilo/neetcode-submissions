class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
 canPartition(nums) {
    let totalSum = nums.reduce((acc, curr) => acc + curr);
    if (totalSum % 2 !== 0) return false;  // Cannot partition if total sum is odd
    let target = totalSum / 2;

    // Initialize memoization table
    let memo = Array(nums.length).fill(null).map(() => Array(target + 1).fill(undefined));

    // Recursive function with memoization
    function dfs(index, currSum) {
        if (currSum === target) return true;
        if (index >= nums.length || currSum > target) return false;

        // Check if this state has been computed before
        if (memo[index][currSum] !== undefined) {
            return memo[index][currSum];
        }

        // Explore including or excluding the current element
        let includeCurrent = dfs(index + 1, currSum + nums[index]);
        let excludeCurrent = dfs(index + 1, currSum);

        // Store result in memoization table
        return memo[index][currSum] = includeCurrent || excludeCurrent;
    }

    return dfs(0, 0);
}
}
