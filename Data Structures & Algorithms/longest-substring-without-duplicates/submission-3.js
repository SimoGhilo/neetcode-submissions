class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
     lengthOfLongestSubstring(s) {
        let str = "";
        let maxL = 0;

        for (let i = 0; i < s.length; i++) {
            // Remove characters from the start of `str` until `str` has no duplicate of `s[i]`
            while (str.includes(s[i])) {
                str = str.slice(1); // Remove the first character
            }
            // Add the current character to the substring
            str += s[i];

            // Update maxL based on the current substring length
            maxL = Math.max(maxL, str.length);
        }

        return maxL;
    }

}
