class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();

        let l = 0;
        let r = 0;

        let maxL = 0;

        while(r < s.length){
            while(set.has(s[r])){
                set.delete(s[l]);
                l++
            }
            maxL = Math.max(r - l + 1,maxL)
            set.add(s[r]);
            r++;
        }

        return maxL
    }
}
