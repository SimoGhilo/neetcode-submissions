class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let n = prices.length;

        let indexBuy = 0;
        for(let i = 1; i < n; i++){
            let profit = prices[i] - prices[indexBuy];
            maxProfit = Math.max(maxProfit, profit);
            if(prices[i] < prices[indexBuy]){
                indexBuy = i;
            }
        }

        return maxProfit
    }
}
