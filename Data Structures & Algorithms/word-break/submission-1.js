class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {

        let memo = {};

        var dfs = (index) => {
            if(index >= s.length) return true; // If we've reached the end of the string, return true
            if(index in memo) return memo[index];

            for(const word of wordDict){
                let flag = true;
                let innerIndex = index;
                if(word.startsWith(s[index])){ // Check if the word matches the current position
                    for(const letter of word){
                        if(letter != s[innerIndex]){ // If any character doesn't match, break
                            flag = false;
                            break;
                        }
                        innerIndex++;
                    }
                    if(flag){
                        // Recursively call dfs and return the result
                        if (dfs(index + word.length)) {
                            memo[index] = true;
                            return true; // If found a valid solution, return true
                        }
                    }
                }
            }

            memo[index] = false;
            return false; // If no solution is found, return false
        }

        return dfs(0); // Start the DFS from index 0
    }
}
