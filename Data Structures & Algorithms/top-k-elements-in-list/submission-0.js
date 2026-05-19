class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map();

        for(const n of nums){
            if(!map.has(n)){
                map.set(n,1);
            } else {
                map.set(n,map.get(n) + 1);
            }
        }

        // Convert the Map to an array and sort it by value
        const sortedArray = [...map].sort((a, b) => b[1] - a[1]);

        // Convert the sorted array back to a Map
        const sortedMap = new Map(sortedArray);

        return Array.from(sortedMap.keys()).slice(0,k)

    }
}
