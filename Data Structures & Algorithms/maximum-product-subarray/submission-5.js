class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const n = nums.length;
        let currMin = nums[0];
        let currMax = nums[0];
        let result = nums[0];

        for (let i = 1; i < n; i++) {
            const num = nums[i];

            if (num === 0) {
                currMin = 0;
                currMax = 0;
                result = Math.max(result, 0);
                // Reset for the next iteration
                currMin = 1;
                currMax = 1;
                continue;
            }

            const prevMin = currMin;
            const prevMax = currMax;

            currMin = Math.min(num, num * prevMin, num * prevMax);
            currMax = Math.max(num, num * prevMin, num * prevMax);

            result = Math.max(result, currMax);
        }

        return result;
    }
}
