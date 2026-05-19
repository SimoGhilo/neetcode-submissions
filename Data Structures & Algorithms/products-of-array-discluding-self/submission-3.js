class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let prefix = new Array(n + 1).fill(1);
        let postfix = new Array(n + 1).fill(1);

        for(let i = 0; i < n; i++){
            prefix[i + 1] = nums[i] * prefix[i]
        }
        console.log(prefix)

        for(let i = n - 1; i > 0; i--){
            postfix[i] = nums[i] * postfix[i + 1]
        }
        
        let joined = [];
        
        for(let i = 0; i < n; i++){
            joined.push(prefix[i] * postfix[i + 1])
        }

        return joined
    }
}
