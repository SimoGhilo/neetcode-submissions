class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        // loop from 2nd last to 0
        // define goal at n - 1
        // if nums[i] >= goal then goal = i
        let n = nums.length;
        let goal = n - 1
        let i = n - 2;
        while(i >= 0){
            let jump = nums[i];
            if((i + jump) >= goal){
                goal = i;
            }
            i--;
        }

        return goal == 0;
    }
}
