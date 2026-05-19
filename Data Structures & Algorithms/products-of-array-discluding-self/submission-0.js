class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let output = [];

        for(let i = 0; i < nums.length; i++){
            let j = 0;
            let res = 1;
            while( j < nums.length){
                if(i != j){
                    res *= nums[j];
                }
                j++
            }
            output[i] = res;
        }

        return output;
    }
}
