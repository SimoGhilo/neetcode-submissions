class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left < right){
            let mid = Math.floor((left + right) / 2);
            let guess = nums[mid];

            if(guess == target) return mid;

            if(guess > nums[right]){
                left = mid+1
            } else {
                right = mid;
            }
        }

        // left holds pivot, do 2 binary searches
        let l = 0;
        let r = left;

        while(l <= r){
            let mid = Math.floor((l + r) / 2);
            let guess = nums[mid];

            if(guess == target) return mid;
            if(guess > target){
                r = mid -1
            } else {
                l = mid + 1 
            }
        }
        l = left;
        r = nums.length - 1;

        while(l <= r){
            let mid = Math.floor((l + r) / 2);
            let guess = nums[mid];

            if(guess == target) return mid;
            if(guess > target){
                r = mid -1
            } else {
                l = mid + 1 
            }
        }

        return -1;
    }
}
