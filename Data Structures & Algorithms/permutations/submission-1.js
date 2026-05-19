class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let solution = [];
        let n = nums.length;
        //let cache = new Array(n).fill(false);

        function backtrack(currComb,cache){
            if(currComb.length == n){
                solution.push([...currComb]);
                return;
            }

            for(let i = 0; i < n; i++){
                if(!cache[i]){
                    currComb.push(nums[i]);
                    cache[i] = true;
                    backtrack(currComb,cache);
                    currComb.pop();
                    cache[i] = false;
                } 
            }
        }
        backtrack([],new Array(n).fill(false))

        return solution;
    }
}
