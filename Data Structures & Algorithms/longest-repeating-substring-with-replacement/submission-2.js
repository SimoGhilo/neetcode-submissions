class Solution {
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let maxLen = 0;
        const mapChar = new Array(26).fill(0);

        for (let right = 0; right < s.length; right++) {
            const idx = s.charCodeAt(right) - 65;
            mapChar[idx]++;

            maxFreq = Math.max(maxFreq, mapChar[idx]);

            while ((right - left + 1) - maxFreq > k) {
                mapChar[s.charCodeAt(left) - 65]--;
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}