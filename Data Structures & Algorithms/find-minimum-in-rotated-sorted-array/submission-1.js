class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // If guess > right then, min is on right
        // Else guess < right then min on the left

        let left = 0;
        let right = nums.length - 1;
        let min = Infinity;

        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            let guess = nums[mid];
            min = Math.min(min,guess)
            if(guess > nums[right]){
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return min
    }
}
