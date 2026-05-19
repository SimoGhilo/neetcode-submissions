class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char);
    }


    isPalindrome(s) {

        let newS = s.split('').filter((c) => this.isAlphanumeric(c));

        let left = 0;
        let right = newS.length - 1;

        while(left < right){

                if(newS[left].toLowerCase() != newS[right].toLowerCase()){
                    return false;
                } 

            left++;
            right--;
        }

        return true;
    }
}
