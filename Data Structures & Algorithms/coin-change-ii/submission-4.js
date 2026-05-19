class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = new Array(amount + 1).fill(0);
        dp[0] = 1; // There's one way to make change for amount 0: using no coins

        // Iterate over each coin
        for (let coin of coins) {
            // Update dp array for all amounts from `coin` to `amount`
            for (let i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin]; // Add ways to form `i` by including the current coin
            }
        }

        return dp[amount]; // Return the number of ways to form the target amount
    }
}
