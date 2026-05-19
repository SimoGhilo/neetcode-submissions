class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {

        let n = nums.length;

        let cache = {};

        var dfs = (currSum,index) => {
            if(index == n && currSum != target) return 0;
            if(currSum == target && index == n) return 1;

            let key = `${currSum}-${index}`;

            if(key in cache) return cache[key];

            let res = dfs(currSum + nums[index], index + 1) + dfs(currSum - nums[index], index + 1);

            cache[key] = res;
            return res;
        }

        return dfs(0,0);
    }
}
