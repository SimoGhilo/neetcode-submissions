class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1;

        while(l < r){
            const m = Math.floor((r + l) / 2);
            if(nums[m] == target) return m;
            if(nums[r] < nums[m]){
                //biting point to right
                l = m + 1
            } else {
                //biting point to left
                r = m
            }
        }
        

        if(nums[l] == target) return l;
        //L is biting index
        // l - 1 is right first half, l is l next half
        let l1 = 0;
        let r1 = l - 1;
        while(l1 < r1){
            const mid = Math.floor((r1 + l1) / 2);
            if(nums[mid] == target) return mid;
            if(nums[mid] > target){
                //look left
                r1 = mid - 1;
            } else {
                //look right
                l1 = mid + 1
            }
        }
        if(nums[l1] == target) return l1;
        //Second search
        let l2 = l;
        let r2 = nums.length - 1;
        while(l2 < r2){
            const mid = Math.floor((r2 + l2) / 2);
            if(nums[mid] == target) return mid;
            if(nums[mid] > target){
                //look left
                r2 = mid - 1;
            } else {
                //look right
                l2 = mid + 1
            }
        }
        if(nums[l2] == target) return l2;
        return -1;
    }
}
