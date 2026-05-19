class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let lowest = prices[0];
        let maxP = 0;

        for(let i = 1; i < prices.length; i++){
            maxP = Math.max(prices[i] - lowest, maxP);

            lowest = Math.min(lowest,prices[i])
        }

        return maxP
    }
}
