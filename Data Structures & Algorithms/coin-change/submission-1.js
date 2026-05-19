class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const cache = new Map();

        var dfs = (currAmount) => {
            // Base cases
            if (currAmount === 0) return 0;          // No coins needed to make amount 0
            if (currAmount < 0) return -1;           // Invalid path
            
            // Check memoization cache
            if (cache.has(currAmount)) {
                return cache.get(currAmount);        // Return already computed result
            }

            let minCoins = Infinity;                 // Minimum coins needed for current amount

            for (const coin of coins) {
                const result = dfs(currAmount - coin);
                if (result !== -1) {                 // Valid path
                    minCoins = Math.min(minCoins, result + 1);
                }
            }

            // Memoize and return result
            cache.set(currAmount, minCoins === Infinity ? -1 : minCoins);
            return cache.get(currAmount);
        }

        return dfs(amount);
    }
}
