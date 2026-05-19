class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length <= 2) return Math.max(...nums)
        const n = nums.length;
        const dp = new Array(n).fill(0);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0],nums[1])

        for(let i = 2; i < n; i++){
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        console.log(dp)
        return Math.max(...dp)
    }
}
