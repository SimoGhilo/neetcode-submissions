class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length == 0) return 0;
        if(nums.length == 1) return 1;

        let set = new Set(nums);

        let maxStreak = 1;

        for(const n of nums){
            if(!set.has(n - 1)){
                //start of a streak
                let currStreak = 1;
                let next = n + 1
                while(set.has(next)){
                    currStreak++;
                    next++;
                }

                maxStreak = Math.max(maxStreak,currStreak);
            }
        }
        

        return maxStreak;
    }
}
