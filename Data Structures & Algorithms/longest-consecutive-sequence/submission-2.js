class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;

        let set = new Set(nums);

        for(const num of nums){
            if(!set.has(num - 1)){
                let sequence = 1;
                let curr = num + 1;
                while(set.has(curr)){
                    sequence += 1;
                    curr += 1;
                }
                longest = Math.max(longest,sequence)
            }
        }

        return longest;
    }
}
