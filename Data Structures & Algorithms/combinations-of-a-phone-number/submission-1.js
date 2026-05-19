class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits.length) return [];
        let combs = [];

    let map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };



        function backtrack(index, currComb){
            // Base cases
            if(currComb.length == digits.length){
                combs.push([...currComb]);
                return;
            }

            // Get the characters corresponding to the current digit
            let arrayChars = map[digits[index]];

            // Explore all possible characters for the current digit
            for (const char of arrayChars) {
                currComb.push(char);  // Choose the current character
                backtrack(index + 1, currComb);  // Move to the next digit
                currComb.pop();  // Backtrack to remove the last character and try another one
            }
        }

        backtrack(0,[]);

        return combs.map((c) => c.join(''))
    }
}
