class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        if(nums.length < 1) return [];

        let combs = [];

        function backtrack(index, currComb){
            //Base cases
            if(index == nums.length){
                combs.push([...currComb]);
                return;
            }

            currComb.push(nums[index])
            // Recursive case
            backtrack(index + 1, currComb);
            // Backtrack
            currComb.pop();
            backtrack(index + 1, currComb);
        }

        backtrack(0,[])

        return combs;
    }
}
