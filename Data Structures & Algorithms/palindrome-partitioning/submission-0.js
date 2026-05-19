class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */

    isPalindrome(string) {
        return string === string.split('').reverse().join('');
    }

    partition(s) {
        if (!s) return [];

        let sol = [];

        // Helper function to perform backtracking
        const backtrack = (start, currList) => {
            if (start === s.length) {
                sol.push([...currList]); // Make a copy of currList and add to sol
                return;
            }

            for (let i = start + 1; i <= s.length; i++) {
                const substring = s.slice(start, i);

                // Check if the substring is a palindrome
                if (this.isPalindrome(substring)) {
                    currList.push(substring); // Add substring to the current list
                    backtrack(i, currList); // Recurse with updated start index
                    currList.pop(); // Backtrack by removing the last element
                }
            }
        };

        // Start the backtracking with index 0 and an empty list
        backtrack(0, []);

        return sol;
    }
}
