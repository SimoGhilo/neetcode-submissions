class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let array = []
        let n = nums.length;

        for(let i = 0; i <= n - k; i++){
            let window = nums.slice(i, i + k);
            let max = Math.max(...window)
            array.push(max)
        }

        return array
    }
}
