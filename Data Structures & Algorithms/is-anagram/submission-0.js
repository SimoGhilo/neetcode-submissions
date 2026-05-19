class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();

        for(const c of s){
            if(!map.has(c)){
                map.set(c,1)
            } else {
                map.set(c, map.get(c) + 1)
            }
        }

        for(const c of t){
            if(map.get(c) == 1)
            {
                map.delete(c)
            } else {
                map.set(c, map.get(c) - 1)
            }
            
        }

        return map.size == 0;


    }
}
