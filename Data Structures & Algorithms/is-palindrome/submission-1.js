class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
    }

    isPalindrome(s) {
        let sanitisedS = "";
        for(const char of s){
            if(this.isAlphanumeric(char)){
                sanitisedS += char.toLowerCase();
            }
        }
        
        let left = 0;
        let right = sanitisedS.length - 1;

        while(left < right){
            if(sanitisedS[left] != sanitisedS[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
