class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = {}; // Use a dictionary for memoization

        // Define the recursive function with memoization
        function dfs(currAmount, index) {
            if (currAmount === 0) return 1;  // If we've reached 0, there's one way (using no more coins)
            if (currAmount < 0) return 0;   // If the amount goes negative, no solution
            if (index === coins.length) return 0; // If we've used all the coins and haven't found a solution

            // Check if the result is already computed
            let key = `${currAmount}-${index}`;
            if (key in dp) {
                return dp[key];
            }

            // Explore two cases:
            // 1. Include the current coin
            // 2. Skip the current coin and move to the next one
            let includeCoin = dfs(currAmount - coins[index], index);
            let excludeCoin = dfs(currAmount, index + 1);

            // Store the result in dp and return it
            dp[key] = includeCoin + excludeCoin;
            return dp[key];
        }

        return dfs(amount, 0);
    }
}
