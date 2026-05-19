class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(t.length != s.length) return false;
        const map = {};

        for(const c of s){
            map[c] = map[c] + 1 || 1
        }
        for(const c of t){
            if(c in map && map[c] > 0){
                map[c] = map[c] - 1
            }
        }
        console.log(map)
        return Object.values(map).every(v => v == 0)
    }
}
