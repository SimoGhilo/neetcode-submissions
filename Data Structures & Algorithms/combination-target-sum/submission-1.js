class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];

        function backtrack(index,currComb,currSum){
            if(currSum == target){
                result.push([...currComb]);
                return;
            }

            if(index >= nums.length) return;
            if(currSum > target) return;
            
            for(let i = index; i < nums.length; i++){
                currComb.push(nums[i]);
                currSum += nums[i];
                backtrack(i,currComb,currSum);
                let popped = currComb.pop();
                currSum -= popped;
            }
        }

        backtrack(0,[],0);
        return result;
    }
}
