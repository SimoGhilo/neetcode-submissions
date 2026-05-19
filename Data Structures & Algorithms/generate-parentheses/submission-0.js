class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        let solution = [];
        
        function backtrack(open,close, string){

            //Base cases
            if(open == close && open == n){
                solution.push(string);
                return;
            }

            if(open < n){
                backtrack(open + 1,close, string + '(');
            }

            if(close < open){
                backtrack(open,close + 1, string + ')');
            }
        }

        backtrack(0,0,"");

        return solution;

    }
}
