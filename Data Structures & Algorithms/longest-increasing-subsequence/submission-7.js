class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;

        const memo = {};

        function DFS(i,prev){
            if(i == n){
                return 0;
            };

            if(`${i}-${prev}`in memo){
                return memo[`${i}-${prev}`];
            }

            let result = -Infinity;

            if(nums[i] > prev){
                result = Math.max(1 + DFS(i + 1, nums[i]), DFS(i + 1, prev));
            } else {
                result = DFS(i + 1, prev);
            }

            memo[`${i}-${prev}`] = result
            return memo[`${i}-${prev}`];
        }
        console.log(memo)
        return DFS(0, -Infinity);
    }
}
