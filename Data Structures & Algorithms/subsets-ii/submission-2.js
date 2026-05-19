class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();
        let solution = [];
        function backtrack(index,currSol){
            if(index == nums.length){
                solution.push([...currSol]);
                return;
            }

            currSol.push(nums[index]);
            backtrack(index + 1, currSol);
            currSol.pop();
            while(index + 1 < nums.length && nums[index] == nums[index + 1]){
               index += 1 
            }
            backtrack(index + 1,currSol);
        }

        backtrack(0,[]);
        return solution;
    }
}
