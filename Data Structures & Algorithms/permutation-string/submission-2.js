class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let n = s2.length;

        let original = new Map();

        for(const char of s1){
            if(original.has(char)){
                original.set(char, original.get(char) + 1)
            } else {
                original.set(char,1)
            }
        }

        let l = 0
        for(let r = s1.length; r <= n; r+=1){
            let map1 = new Map(original);
            let subs = s2.slice(l,r);

            for(const char of subs){
                if(map1.has(char)){
                    map1.set(char, map1.get(char) - 1);
                    if(map1.get(char) == 0){
                        map1.delete(char)
                    }
                } else {
                    break;
                }
            }
            if(map1.size == 0){
                return true;
            }
            l++
        }

        return false;
        
    }
}
