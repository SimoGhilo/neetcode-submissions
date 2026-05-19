class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) { 
        if(amount == 0) return 0;

        coins.sort((a,b) => a - b);
        const dp = new Array(amount + 1).fill(Infinity);

        for(let i = 1; i <= amount; i++){
            for(const coin of coins){
                const remainder = i - coin;
                if(remainder < 0) break;
                if(remainder == 0){
                    dp[i] = 1
                } else {
                    dp[i] = Math.min(dp[i], dp[remainder] + 1)
                }
            }
        }

        if(dp[amount] == Infinity) return -1;
        return dp[amount]
    }
}
