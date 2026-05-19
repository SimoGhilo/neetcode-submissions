class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let maxWater = 0;

        while(left < right){
            
            let water = Math.min(heights[left], heights[right]) * (right - left);

            maxWater = Math.max(maxWater,water);
            
            if (heights[left] < heights[right]) {
                left++;  
            } else {
                right--; 
            }
        }

        return maxWater;
    }
}
