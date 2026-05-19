class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for(let i = 1; i < nums.length; i++){
            for(let j = 0; j < i; j++){
                if(i != j){
                    if((nums[i] + nums[j]) == target){
                        return [i,j]
                    }
                }
            }
        }

    }
}
