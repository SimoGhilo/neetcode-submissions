class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n = nums.length;
        if(n <= 2) return Math.max(...nums);

        let array1 = nums.slice(0,n - 1);
        let array2 = nums.slice(1,);

        let dp1 = new Array(n - 1).fill(0);
        let dp2 = new Array(n - 1).fill(0);

        dp1[0] = nums[0];
        dp1[1] = Math.max(nums[0],nums[1]);
        dp2[0] = nums[1];
        dp2[1] = Math.max(nums[1],nums[2]);

        for(let i = 2; i < array1.length; i++){
            dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + array1[i]);
        }

        for(let i = 2; i < array2.length; i++){
            dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + array2[i]);
        }

        return Math.max(...dp1, ...dp2);

    }
}
