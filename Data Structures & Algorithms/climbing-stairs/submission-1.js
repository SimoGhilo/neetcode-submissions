class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
     /*   if(n == 0) return 0; // No ways to climb 0 setps
        if(n == 1) return 1; // 1 way to climb 1 step
        if(n == 2) return 2; // 2 ways of climbing 2 steps

        return this.climbStairs(n - 1) + this.climbStairs(n - 2); */

        let res = new Array(n).fill(0);
        res[1] = 1;
        res[2] = 2;

        for(let i = 3; i <= n; i++){
            res[i] = res[i - 1] + res[i - 2];
        }

        return res[n]
    }
}
