class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        // Sort the input array to group duplicates together
        nums.sort((a, b) => a - b);
        let sol = [];

        function backtrack(currComb, index) {
            // Push a copy of the current combination to the solution
            sol.push([...currComb]);

            for (let i = index; i < nums.length; i++) {
                // If this is a duplicate element (same as the previous one) and
                // we're not at the first occurrence of this element in this recursion path, skip it
                if (i > index && nums[i] === nums[i - 1]) continue;

                // Include nums[i] in the current combination
                currComb.push(nums[i]);
                // Recursively generate further combinations
                backtrack(currComb, i + 1);
                // Backtrack by removing the last added element
                currComb.pop();
            }
        }

        // Start backtracking with an empty combination and index 0
        backtrack([], 0);

        return sol;
    }
}
