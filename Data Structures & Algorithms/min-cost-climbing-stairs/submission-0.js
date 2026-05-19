class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        let dp = new Array(cost.length).fill(0);
        dp[0] = cost[0];
        dp[1] = cost[1]

        for(let i = 2; i <= cost.length; i++){
            dp[i] = Math.min(dp[i - 2] + cost[i], dp[i - 1] + cost[i])
        }

        console.log(dp)

        return Math.min(dp[cost.length- 2], dp[cost.length - 1]);
        
    }
}
