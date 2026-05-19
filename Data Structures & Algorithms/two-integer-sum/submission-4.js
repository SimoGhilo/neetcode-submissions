class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for(let i = 0; i < nums.length; i++){
            map[nums[i]] = i
        }

        for(let i = 0; i < nums.length; i++){
            const difference = target - nums[i];
            if(difference in map && map[difference] != i){
                return [map[difference], i]
            }
        }
        return []
    }
}
