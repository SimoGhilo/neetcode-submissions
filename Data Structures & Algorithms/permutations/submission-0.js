class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        let sol = [];

        function backtrack(currComb, pick){
            if(currComb.length == nums.length){
                sol.push([...currComb]);
                return;
            }

            // R+BT cases

            for(let i = 0; i < nums.length; i++){

                if(!pick[i])
                {
                    currComb.push(nums[i])
                    pick[i] = true;
                    backtrack(currComb, pick);
                    currComb.pop();
                    pick[i] = false;
                }

            }
        }

        backtrack([], new Array(nums.length).fill(false));
        

        return sol;
    }
}
