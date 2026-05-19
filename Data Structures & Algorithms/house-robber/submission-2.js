class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
    // Edge cases for arrays of length 0, 1, or 2
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
        let dp = new Array(nums.length + 1).fill(0);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]); 

        for(let i = 2; i <= nums.length; i++){
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }
        console.log(dp)
        return dp[nums.length - 1]

    }
}
