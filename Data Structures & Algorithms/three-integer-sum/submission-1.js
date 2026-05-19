class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length;
        nums.sort((a,b)=> a - b);
        let sol = [];
        let set = new Set();

        for(let i = 0; i < n ; i++){
            let left = i + 1;
            let right = n - 1;
            while(left < right){
                let guess = nums[i] + nums[left] + nums[right];
                if(guess > 0){
                    right --
                } else if(guess < 0){
                    left ++
                } else {
                    if(!set.has(`${nums[i]}-${nums[left]}-${nums[right]}`)){
                        sol.push([nums[i],nums[left],nums[right]]);
                        set.add(`${nums[i]}-${nums[left]}-${nums[right]}`)
                    }
                    left ++;
                    right --;
                }
            }
        }
        return sol;
    }
}
