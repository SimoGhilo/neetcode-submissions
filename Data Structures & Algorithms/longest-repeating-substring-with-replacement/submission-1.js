class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;  // Left pointer for sliding window
        let n = s.length;
        let chars = new Map();  // Map to store frequency of characters in the current window

        let maxL = 0;  // To store the maximum length of the substring
        let maxCount = 0;  // To store the count of the most frequent character in the window

        for (let r = 0; r < n; r++) {
            // Update frequency of the character at right pointer
            let charRight = s[r];
            chars.set(charRight, (chars.get(charRight) || 0) + 1);

            // Update maxCount based on the new character added to the window
            maxCount = Math.max(maxCount, chars.get(charRight));

            // If the window size minus the most frequent character count is greater than k,
            // we need to shrink the window
            if ((r - l + 1) - maxCount > k) {
                // Shrink the window from the left
                let charLeft = s[l];
                chars.set(charLeft, chars.get(charLeft) - 1);
                l++;  // Move the left pointer
            }

            // Update the maximum length of the substring
            maxL = Math.max(maxL, r - l + 1);
        }

        return maxL;
    }
}
