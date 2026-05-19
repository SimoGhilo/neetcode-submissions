class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;
        let count = 0;

        //Odd length
        for(let i = 0; i < n; i++){
            let j = i;
            let k = i;

            while(j >= 0 && k < n && s[j] == s[k]){
                count++;
                j--;
                k++;
            }
        }

        //Even length
        for(let i = 0; i < n; i++){
            let j = i;
            let k = i + 1;

            while(j >= 0 && k < n && s[j] == s[k]){
                count++;
                j--;
                k++;
            }

        }
        
        return count;
    }
}
