class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const lookup = new Set(nums);
        if(nums.length < 1) return 0;
        let longest = 1;

        for(const n of nums){
            let curr = n + 1
            let streak = 1;
            while(lookup.has(curr)){
                streak += 1;
                longest = Math.max(longest,streak)
                curr++
            }
        }

        return longest;
    }
}
