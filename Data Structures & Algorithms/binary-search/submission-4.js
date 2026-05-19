class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length -1

        while(left <= right){
            let midIndex = Math.floor((left + right) / 2)
            let guess = nums[midIndex];
            if(guess == target) return midIndex;

            if(guess > target){
                right = midIndex - 1
            } else {
                left = midIndex + 1
            }
        }

        return -1
    }
}
