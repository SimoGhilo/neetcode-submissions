class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const n = s.length;
        let low = 0; //minimum (
        let high = 0; // maximum (

        for(const char of s){
            if(char == ')'){
                low--;
                high--;
            } else if(char == '('){
                low++;
                high++;
            } else {
                low--;
                high++;
            }
            if(high < 0) return false;
            if (low < 0) low = 0;
        }

        return low == 0;
    }
}
