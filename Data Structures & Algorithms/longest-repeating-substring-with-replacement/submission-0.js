class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxL = 0;
        let cache = new Array(26).fill(0); // Array to store character frequencies
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            let index = s.charCodeAt(right) - 'A'.charCodeAt(0);
            cache[index]++; // Increment the frequency of the character at `right`
            
            // Calculate the current window length
            let windowLength = right - left + 1;
            
            // If replacements needed exceed `k`, shrink the window from the left
            if (windowLength - Math.max(...cache) > k) {
                cache[s.charCodeAt(left) - 'A'.charCodeAt(0)]--; // Correctly decrement count
                left++; // Move `left` pointer to shrink the window
            }

            // Update maxL with the current window size
            maxL = Math.max(maxL, right - left + 1);
        }

        return maxL;
    }
}
