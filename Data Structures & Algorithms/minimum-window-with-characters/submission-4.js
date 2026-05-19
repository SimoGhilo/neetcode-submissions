class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    minWindow(s, t) {
        if (s.length < t.length) return ''; // If s is smaller than t, there's no valid window
        let windowT = {};

        // Build the frequency map for t
        for (const char of t) {
            windowT[char] = windowT[char] + 1 || 1;
        }

        let need = Object.keys(windowT).length; // Number of unique characters in t

        let n = s.length;
        let l = 0;
        let windowS = {};
        let sol = '';
        let minL = Infinity;
        let have = 0; // Number of characters in windowS that meet the required count from windowT

        for (let r = 0; r < n; r++) {
            // Update the frequency of the current character in windowS
            if (s[r] in windowT) {
                windowS[s[r]] = windowS[s[r]] + 1 || 1;

                // If the current character's frequency matches the required frequency, increment 'have'
                if (windowS[s[r]] === windowT[s[r]]) {
                    have++;
                }
            }

            // When we have a valid window, try to shrink it from the left
            while (have === need) {
                // Update the result if the current window is smaller
                if (r - l + 1 < minL) {
                    minL = r - l + 1;
                    sol = s.slice(l, r + 1);
                }

                // Shrink the window from the left
                if (s[l] in windowT) {
                    windowS[s[l]]--;
                    // If a character's count drops below the required count, decrement 'have'
                    if (windowS[s[l]] < windowT[s[l]]) {
                        have--;
                    }
                }

                // Move the left pointer
                l++;
            }
        }

        return sol;
    }
}
