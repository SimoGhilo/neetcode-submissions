class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let seen = new Set();

        for(const n of nums){
            if(seen.has(n)) return n;
            seen.add(n);
        }
    }
}
