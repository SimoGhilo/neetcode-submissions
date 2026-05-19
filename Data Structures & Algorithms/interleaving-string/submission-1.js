class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const m = s1.length;
        const n = s2.length;
        if((m + n) != s3.length) return false;
        const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
        dp[m][n] = true;

        for(let i = m; i >= 0; i--){
            for(let j = n; j >= 0; j--){
                if((i < m && s1[i] === s3[i + j] && dp[i + 1][j])
                || (j < n && s2[j] === s3[i + j] && dp[i][j + 1])){
                    dp[i][j] = true;
                }
            }
        }
        console.log(dp)
        return dp[0][0]
    }
}
