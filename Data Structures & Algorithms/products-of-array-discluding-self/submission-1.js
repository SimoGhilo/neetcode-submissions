class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefix = new Array(nums.length).fill(1);

        // Correct bounds for prefix calculation
        for (let i = 0; i < nums.length; i++) {
            if (i > 0) {
                prefix[i] = nums.slice(0, i).reduce((acc, curr) => acc * curr, 1);
            }
        }

        let suffix = new Array(nums.length).fill(1);

        // Correct bounds for suffix calculation
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i < nums.length - 1) {
                suffix[i] = nums.slice(i + 1).reduce((acc, curr) => acc * curr, 1);
            }
        }

        let output = prefix.map((x, i) => x * suffix[i]);

        return output;
    }
}
