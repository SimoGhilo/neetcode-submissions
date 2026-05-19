class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;

        const memo = {};

        function DFS(i){
            if(i == n) return true;
            if(i in memo) return memo[i];

            for(const word of wordDict){
                const l = word.length;
                const substring = s.slice(i, i + l);
                if(word == substring){
                    if(DFS(i + l)) return true;
                }
            }
            memo[i] = false;
            return false;
        }

        return DFS(0)
    }
}
