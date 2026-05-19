class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const n = s.length;

        const memo = {};
        
        function DFS(i,open){
            if(i == n) return open == 0;
            if(open < 0) return false;

            if(`${i}-${open}` in memo) return memo[i];

            let result;
            if(s[i] == ')'){
                result = DFS(i + 1, open - 1)
            } else if(s[i] == '('){
                result = DFS(i + 1, open + 1)
            } else {
                result = DFS(i + 1, open + 1) ||
                DFS(i + 1, open) || DFS(i + 1, open - 1)
            }

            memo[`${i}-${open}`] = result;
            return result;
        }

        return DFS(0,0)
    }
}
