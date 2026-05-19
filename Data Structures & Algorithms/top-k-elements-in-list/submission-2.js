class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for(const n of nums){
            if(n in map){
                map[n] = map[n] + 1
            } else {
                map[n] = 1
            }
        }

        const entries = Object.entries(map)
        entries.sort((a,b) => b[1] - a[1])
        const result = [];
        let i = 0;
        while(k > 0){
            result.push(entries[i][0]);
            i++
            k--;
        }
        return result;
    }
}
