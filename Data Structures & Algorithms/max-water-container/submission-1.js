class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;

        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            let water = (right - left) * Math.min(heights[left], heights[right])
            maxWater = Math.max(maxWater, water);

            if(heights[left] > heights[right]){
                right--;
            } else {
                left++
            }
        }

        return maxWater;
    }
}
