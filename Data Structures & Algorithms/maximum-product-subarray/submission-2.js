class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
    let n = nums.length;
    
    // Initialize max and min product to the first element.
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0]; // This will store the maximum product found so far.

    for (let i = 1; i < n; i++) {
        // If nums[i] is negative, swap maxProd and minProd because multiplying by a negative flips the signs.
        if (nums[i] < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        // Update the max and min products at index i.
        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);

        // Update the result to store the maximum product found so far.
        result = Math.max(result, maxProd);
    }

    return result;
};

}
