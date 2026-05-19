class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    
    // Correct palindrome check function
    isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    countSubstrings(s) {
        let count = 0;

        // Loop through all possible substrings
        for (let start = 0; start < s.length; start++) {
            for (let end = start + 1; end <= s.length; end++) {
                let sub = s.slice(start, end);
                if (this.isPalindrome(sub)) {
                    count++;  // Increment the count if the substring is a palindrome
                }
            }
        }
        return count;
    }
}

