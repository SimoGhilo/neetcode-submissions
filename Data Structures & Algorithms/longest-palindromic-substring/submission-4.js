class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const l = s.length;

        let res = "";
        let resLen = 0;

        for(let i = 0; i < l; i++){
            //Check even
            let left = i;
            let right = i + 1
            while(left >= 0 && right < l && s[left] == s[right]){
                if((right - left + 1) > resLen){
                    res = s.slice(left, right + 1);
                }
                resLen = Math.max(resLen, right - left + 1);
                left--;
                right++;
            }
            //Check odd
            left = i;
            right = i
            while(left >= 0 && right < l && s[left] == s[right]){
                if((right - left + 1) > resLen){
                    res = s.slice(left, right + 1);
                }
                resLen = Math.max(resLen, right - left + 1);
                left--;
                right++;
            }
        }

        return res;
    }
}
