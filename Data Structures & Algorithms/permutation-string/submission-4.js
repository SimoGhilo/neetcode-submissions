class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        const mapChar1 = new Array(26).fill(0);
        const mapChar2 = new Array(26).fill(0);

        for(const c of s1){
            mapChar1[c.charCodeAt(0) - 97] ++;
        }
        const keyCheck = mapChar1.join('');
        
        const n1 = s1.length;

        for(let i = 0; i < n1; i++){
            mapChar2[s2[i].charCodeAt(0) - 97] ++;
        }

        if(mapChar2.join('') == keyCheck) return true;

        let left = 0;
        let right = n1;

        while(right < s2.length){
            //Slide right
            mapChar2[s2[right].charCodeAt(0) - 97] ++;
            mapChar2[s2[left].charCodeAt(0) - 97] --;

            if(mapChar2.join('') == keyCheck) return true;

            right++;
            left++;

        }

        return false;
        
    }
}
