class Solution {

    replaceString(str) {
        const sanit = str.replace(/[^a-zA-Z0-9]/g, '');
        return sanit.toLowerCase();
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sanitised = this.replaceString(s);
        let left = 0;
        let right = sanitised.length - 1;

        while(left < right){
            if(sanitised[left] != sanitised[right]) return false;
            left++;
            right--;
        }

        return  true
    }
}
