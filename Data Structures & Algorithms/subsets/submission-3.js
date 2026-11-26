class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const solution = [];
        const n = nums.length;

        function backtrack(i,curr){
            if(i == n){
                solution.push([...curr]);
                return;
            }
            backtrack(i + 1, curr.concat([nums[i]]));
            backtrack(i + 1, curr)
        }
        backtrack(0,[])
        return solution;
    }
}
