class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // variable to keep track canBuy, canSell, buy - sell +
        // we can always cooldown, we must cooldown after buying
        // memo to store max profit at i th day
        // return max val at nth day
        // 2D cache [i][selling] 

        const n = prices.length;
        const dp = new Array(n).fill(0).map(() => new Array(2));

        function DFS(canBuy,i){
            if(i >= n) return 0;
            if(dp[i][canBuy]) return dp[i][canBuy];
            let result;

            if(canBuy){
                //Buy
                let buy = DFS(false, i + 1) - prices[i];
                //cooldown
                let cooldown = DFS(true, i + 1);
                result = Math.max(buy, cooldown);

            } else {
                //Sell
                let sell = DFS(true, i + 2) + prices[i];
                //Cooldown
                let cooldown = DFS(false, i + 1);
                result = Math.max(sell, cooldown);
            }
            
            dp[i][canBuy] = result;
            return result;
        }

        return DFS(true,0)

    }
}
