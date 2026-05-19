class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const left = new Array(n + 1).fill(1);
        const right = new Array(n + 1).fill(1);


        for(let i = 1; i <= n; i++){
            let prev = left[i - 1];
            left[i] = prev * nums[i - 1]
            prev = left[i]
        }
        for(let i = n - 1; i >= 0; i--){
            let prev = right[i + 1];
            right[i] = prev * nums[i]
            prev = right[i]
        }

        console.log(left,right)
        
        return left.map((item, idx) => {
            if(idx < left.length - 1){
                return item * right[idx + 1]
            }
        }).filter((x) => {
            return x != undefined && x != null
        })
    }
}
