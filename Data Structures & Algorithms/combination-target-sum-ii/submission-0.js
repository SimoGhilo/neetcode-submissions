class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let sol = [];

        candidates.sort((a,b) => a - b);

        function backtrack(sum,currComb,index){
            if(sum == target){
                sol.push([...currComb]);
                return;
            }

            for(let i = index; i < candidates.length; i++){

                if(i != index && candidates[i] == candidates[i - 1]) continue;

                sum += candidates[i];
                currComb.push(candidates[i]);

                // Recurse
                backtrack(sum,currComb, i + 1);
                //Backtrack
                let item = currComb.pop();
                sum -= item;
            }
        }

        backtrack(0,[],0);

        return sol;
    }
}
