class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n == 0) return 0; // No ways to climb 0 setps
        if(n == 1) return 1; // 1 way to climb 1 step
        if(n == 2) return 2; // 2 ways of climbing 2 steps

        return this.climbStairs(n - 1) + this.climbStairs(n - 2);
    }
}
