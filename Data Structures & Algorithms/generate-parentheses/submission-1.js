class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let solutions = [];

        function backtrack(close,open,currSol){
            if((open + close) == (n * 2)){
                solutions.push(currSol);
                return;
            }

            if(open < n){
                currSol += '(';
                backtrack(close,open + 1,currSol)
                currSol = currSol.slice(0,-1)
            }

            if(close < open){
                currSol += ')'
                backtrack(close + 1,open,currSol)
                currSol = currSol.slice(0,-1)
            } 
        }

        backtrack(0,0,"");

        return solutions;
    }
}
