class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        const solution = []
        nums.sort((a, b) => a - b);
        const used = new Set();
        
        for(let i = 0; i < n; i++){
            let l = i + 1;
            let r = n - 1;
            while(l < r){
                const guess = nums[i] + nums[l] + nums[r];

                if(used.has(`${nums[i]}-${nums[l]}-${nums[r]}`)){
                    l++;
                    r--;
                    continue;
                }
                if(guess == 0){
                    solution.push([nums[i] , nums[l] , nums[r]]);
                    used.add(`${nums[i]}-${nums[l]}-${nums[r]}`);
                    
                    while(l < r - 1 && nums[l] == nums[l + 1]){
                        l++;
                    }
                    while(r > l + 1 && nums[r] == nums[r - 1]){
                        r--;
                    }
                } else if(guess > 0){
                    r--
                } else{
                    l++;
                }
                
            }
        }
        return solution;
    }
}
