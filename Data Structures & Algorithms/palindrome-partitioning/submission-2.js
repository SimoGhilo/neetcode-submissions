class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */

    partition(s) {
        function isPalindrome(s){
            if(!s) return false;
            return s.split('').reverse().join('') == s;
        }

        let solution = [];
        let n = s.length;

        function backtrack(i,subs){
            if(i == n){
                solution.push([...subs]);
                return;
            }

            //subs is an array of strings
            for(let j = i + 1; j <= n; j++){
                let substring = s.slice(i,j);
                if(isPalindrome(substring)){
                    subs.push(substring);
                    backtrack(j,subs)
                    // substring = substring.slice(0,-1);
                    subs.pop()
                }

            }
        }

        backtrack(0, []);
        return solution;

    }
}
