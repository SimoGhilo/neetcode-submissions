class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    isPalindrome(string){
        let reversed = "";
        for(let i = string.length - 1; i >= 0; i --){
            reversed += string[i];
        }
        return reversed == string;
    }

    longestPalindrome(s) {

        let actualLongest = "";
        let longest = 0;

        var dfs = (str, cache) => {
            if (str.length <= 1) return;

            if(cache.has(str)){
                return;
            }

            cache.set(str,true);

            if(this.isPalindrome(str)){
                if(str.length > longest){
                    longest = str.length;
                    actualLongest = str;
                }
            }

            dfs(str.slice(1,),cache);
            dfs(str.slice(0, -1),cache);
        }

        dfs(s,new Map());

        return actualLongest || s[0];
    }
}
