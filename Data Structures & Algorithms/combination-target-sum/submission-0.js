class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let combs = [];
        nums.sort((a, b) => a - b); // Sort to improve efficiency

        function backtrack(sum, currComb, index) {
            // Base case
            if (sum === target) {
                combs.push([...currComb]);
                return;
            }

            // Termination condition
            if (index >= nums.length || sum > target) return;

            // Include the current element
            currComb.push(nums[index]);
            backtrack(sum + nums[index], currComb, index); // Recurse with the same index (allow reuse)
            currComb.pop(); // Backtrack

            // Exclude the current element and move to the next index
            backtrack(sum, currComb, index + 1);
        }

        backtrack(0, [], 0);
        return combs;
    }
}
