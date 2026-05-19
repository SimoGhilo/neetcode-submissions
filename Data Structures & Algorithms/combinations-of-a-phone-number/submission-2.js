class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits) return [];
        
        const map = {
            "2": ['a', 'b', 'c'],
            "3": ['d', 'e', 'f'],
            "4": ['g', 'h', 'i'],
            "5": ['j', 'k', 'l'],
            "6": ['m', 'n', 'o'],
            "7": ['p', 'q', 'r', 's'],
            "8": ['t', 'u', 'v'],
            "9": ['w', 'x', 'y', 'z']
        };

        let result = [];

        function backtrack(index,curr){
            if(index == digits.length){
                result.push(curr);
                return;
            }

            for(const letter of map[digits[index]]){
                curr += letter;
                backtrack(index + 1,curr);
                curr = curr.slice(0,-1);
            }
        }

        backtrack(0,'');

        return result;

    }
}
