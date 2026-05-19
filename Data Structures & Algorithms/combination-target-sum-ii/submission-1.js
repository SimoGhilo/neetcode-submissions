class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

        let sol = [];

        candidates.sort((a,b) => a - b)

        function backtrack(currComb,currSum,index){
            if(currSum == target){
                sol.push([...currComb]);
                return;
            }
            if(currSum > target) return;

            for(let i = index; i < candidates.length; i++){
                if (i > index && candidates[i] === candidates[i - 1]) continue;
                currComb.push(candidates[i]);
                backtrack(currComb,currSum + candidates[i],i + 1);
                currComb.pop();
            }
        }
        backtrack([],0,0,new Array(candidates.length));
        return sol;
    }
}
