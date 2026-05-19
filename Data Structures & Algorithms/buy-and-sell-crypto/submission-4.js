class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = - Infinity;

        let min = prices[0];

        for(let i = 1; i < prices.length; i++){
            if(prices[i] < min){
                min = prices[i];
            }
            maxProfit = Math.max(maxProfit, prices[i] - min)
        }

        const r = maxProfit == -Infinity ? 0 : maxProfit;
        return r;
    }
}
