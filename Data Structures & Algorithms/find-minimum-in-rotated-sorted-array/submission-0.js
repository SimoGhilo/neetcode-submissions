class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        let left = 0;
        let right = nums.length - 1;

        let min = Infinity;

        while(left <= right){

            let mid = Math.floor((left + right) / 2)
            let guess = nums[mid];

             min = Math.min(guess,min);

            if(guess > nums[right]){
                // This would mean the min is on the right side
                left = mid + 1
            } else {
                right = mid - 1;
            }
        }

        return min
    }
}
