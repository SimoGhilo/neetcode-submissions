class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // Remove the +1

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1; // Narrow down the right bound
            } else {
                left = mid + 1; // Narrow down the left bound
            }
        }

        return -1; // Target not found
    }
}
