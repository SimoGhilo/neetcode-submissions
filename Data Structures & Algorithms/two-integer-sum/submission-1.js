class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        let n = nums.length;

        for(let i = 0; i < n; i++){
            for(let j = 0; j < i; j++){
                if(nums[i] + nums[j] == target) return [i,j]
            }
        }
    }
}
