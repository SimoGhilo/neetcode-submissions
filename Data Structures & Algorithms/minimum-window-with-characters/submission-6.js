class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */


    minWindow(s, t) {
        let min = "";        
        let minL = Infinity;
        const mapT = new Map();

        for(const char of t){
            if(!mapT.has(char)){
                mapT.set(char,1)
            } else {
                mapT.set(char, mapT.get(char) + 1)
            }
        }

        let left = 0;
        let right = 0;

        const mapS = new Map();


        while(right < s.length){

            if(!mapS.has(s[right])) {
                mapS.set(s[right], 1)
            } else {
                mapS.set(s[right], mapS.get(s[right]) + 1)
            }
            //Validate window and get the min Length and string 
            while(Object.keys(Object.fromEntries(mapT)).every((k) => {
                if(mapS.has(k)){
                    return mapS.get(k) >= mapT.get(k)
                } else {
                    return false;
                }
            })){
                if((right - left + 1) < minL){
                    minL = (right - left + 1);
                    min = s.slice(left,right + 1)
                }
                //Update mapS
                if(mapS.get(s[left]) == 1){
                    mapS.delete(s[left])
                } else {
                    mapS.set(s[left], mapS.get(s[left]) - 1)
                }
                left++;
            }

            right++;

        }

        return min;

    }
}
