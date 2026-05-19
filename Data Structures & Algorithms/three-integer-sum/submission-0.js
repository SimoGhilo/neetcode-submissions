class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let output = [];

        nums.sort((a,b) => a - b);

        for(let i = 0; i < nums.length; i++){

            if (i > 0 && nums[i] === nums[i - 1]) {
                // Skip the same `i` to avoid duplicates
                continue;
            }
            
            let j = nums.length - 1;
            let k = i + 1;

            while(k < j)
            {
                let sum = nums[i] + nums[k] + nums[j];
                if(sum == 0){
                    output.push([nums[i] , nums[k] , nums[j]]);

                    // Move both pointers to the next unique elements
                    while (k < j && nums[k] === nums[k + 1]) k++;
                    while (k < j && nums[j] === nums[j - 1]) j--;


                    k ++;
                    j--;
                } else if(sum > 0)
                {
                    j--;
                } else {
                    k++;
                }
            }
        }

        return output;
    }
}
