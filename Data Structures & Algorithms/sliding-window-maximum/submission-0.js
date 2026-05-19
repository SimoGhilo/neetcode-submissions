class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        let left = 0
        let max = [];

        for(let right = k; right <= nums.length; right++){
            let sub = nums.slice(left, k + left)
            max.push(Math.max(...sub))
            left++
        }

        return max;
    }
}
