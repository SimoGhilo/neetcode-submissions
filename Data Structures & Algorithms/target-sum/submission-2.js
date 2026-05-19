class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {

        const cache = {};
        function DFS(i,currSum){
            if(i == nums.length && currSum == target) return 1;
            if(i == nums.length && currSum != target) return 0;
            if(`${i}-${currSum}` in cache) return cache[`${i}-${currSum}`];

            cache[`${i}-${currSum}`] = DFS(i + 1, currSum - nums[i]) + DFS(i + 1, currSum + nums[i]);
            return cache[`${i}-${currSum}`]

        }

        return DFS(0,0);
    }
}
