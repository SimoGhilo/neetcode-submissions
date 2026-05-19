class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];

        function backtrack(index,currComb){
            if(index == nums.length){
                result.push([...currComb]);
                return;
            }

            backtrack(index + 1, [...currComb, nums[index]]);
            backtrack(index + 1, currComb)
        }

        backtrack(0,[]);
        return result;
    }
}
