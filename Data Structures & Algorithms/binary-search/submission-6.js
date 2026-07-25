class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l < r){

            const mid = Math.floor((l + r) / 2);
            console.log(mid)
            if(nums[mid] == target) return mid;

            if(nums[mid] > target){
                //search left
                r = mid;
            } else {
                //search right
                l = mid + 1
            }
        }

        if(nums[l] == target) return l;
        return -1;
    }
}
