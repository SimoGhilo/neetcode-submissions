class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        let m = text1.length;
        let n = text2.length;

        let dp = new Array(m + 1).fill(0).map(()=> new Array(n + 1).fill(0));


        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(text1[i] == text2[j]){
                    dp[i + 1][j + 1] = dp[i][j] + 1
                } else {
                    dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
                }
            }
        }

        console.log(dp);
        return dp[m][n]
    }
}
