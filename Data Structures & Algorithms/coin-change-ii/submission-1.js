class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = new Array(amount + 1).fill(0); // DP array to store the number of ways to make each amount
        dp[0] = 1; // There's one way to make 0 amount (by choosing no coins)

        for (let coin of coins) { // Iterate over each coin
            for (let i = coin; i <= amount; i++) { // For each amount from coin to target amount
                dp[i] += dp[i - coin]; // Add the number of ways to make (i - coin) to dp[i]
            }
        }

        return dp[amount]; // Return the number of ways to make the target amount
    }
}
