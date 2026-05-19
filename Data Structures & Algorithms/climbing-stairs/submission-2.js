class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = {};

        function DP(currN){
            if(currN == 1) return 1;
            if(currN == 2) return 2;
            if(currN in memo) return memo[currN]

            let result = DP(currN - 1) + DP(currN - 2);
            memo[currN] = result;
            return memo[currN]
        }

        return DP(n);
    }
}
