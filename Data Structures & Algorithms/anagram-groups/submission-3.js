class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(const str of strs) {
            const charArray = new Array(26).fill(0);
            for(const n of str){
                const index = n.charCodeAt(0) - 'a'.charCodeAt(0);
                charArray[index] ++;
            }
            const key = charArray.join('#');
            if(key in map){
                map[key].push(str)
            } else {
                map[key] = [str]
            }
        }
        console.log(map)
        return Object.values(map)
    }
}
