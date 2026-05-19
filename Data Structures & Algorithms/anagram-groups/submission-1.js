class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        let sortedStrs = strs.map((s, i) => {
            return [s.split('').sort().join(''),i]
        });

        for(const [string,index] of sortedStrs){
            if(!map.has(string)){
                map.set(string, [])
            }
            map.get(string).push(index)
        }

         let result = [];

         for(const [key,vals] of map){
            let bucket = [];
            for(const v of vals){
                bucket.push(strs[v]);
            }
            result.push(bucket)
         }

         return result;
         
    }
}
