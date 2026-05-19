class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    k;
    nums;

    constructor(k, nums) {
        this.k = k;
        this.nums = nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        this.nums.sort((a,b) => b - a);
        return this.nums[this.k - 1];
    }
}
