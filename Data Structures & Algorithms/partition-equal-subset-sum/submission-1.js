class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        //Top down recursively 
        const cache = {};

        function DFS(i,left,right){
            if(i == nums.length) return left == right;
            if(`${i}-${left}-${right}` in cache) return cache[`${i}-${left}-${right}`];

            cache[`${i}-${left}-${right}`] = DFS(i + 1, left + nums[i], right) 
            || DFS(i + 1, left, right + nums[i]);

            return cache[`${i}-${left}-${right}`]
        }

        return DFS(0,0,0);

    }
}
