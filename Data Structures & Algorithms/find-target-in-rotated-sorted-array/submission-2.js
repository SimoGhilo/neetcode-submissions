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
            let mid = Math.floor((left + right) / 2);
            
            // Check if the middle element is the target
            if (nums[mid] === target) {
                return mid;
            }
            
            // Determine which half is sorted
            if (nums[left] <= nums[mid]) {
                // Left side is sorted
                if (nums[left] <= target && target < nums[mid]) {
                    // Target is within the left sorted portion
                    right = mid - 1;
                } else {
                    // Target is not in the left sorted portion
                    left = mid + 1;
                }
            } else {
                // Right side is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    // Target is within the right sorted portion
                    left = mid + 1;
                } else {
                    // Target is not in the right sorted portion
                    right = mid - 1;
                }
            }
        }
        
        // Target is not in the array
        return -1;
    }
}
