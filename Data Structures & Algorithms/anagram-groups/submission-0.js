class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let split = strs.map((s) => s.split(""));

        let sor = split.map((a) => a.sort());

        let processed = []

        for(let i = 0; i < sor.length; i++)
        {
            let container = sor[i];

            let word = "";

            for(const c of container){
                word += c;
            }

            processed.push([word,i])
        }

        let map = new Map()

        for(const bucket of processed){
            if(!map.has(bucket[0])){
                map.set(bucket[0], [bucket[1]])
            } else {
                map.get(bucket[0]).push(bucket[1])
            }
        }

        let vals = Array.from(map.values()).map((arr) => {
            return arr.map((v) => strs[v]); 
        });

        return vals;

    }

}
