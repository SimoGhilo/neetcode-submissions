class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let maxL = 0;
        let maxR = 0;
        let l = 0;
        let r = heights.length - 1;

        while(l < r){
            if(heights[l] > maxL){
                maxL = heights[l];
            }
            if(heights[r] > maxR){
                maxR = heights[r];
            }
            const area = Math.min(maxL, maxR) * (r - l);
            maxArea = Math.max(maxArea , area)
            if(heights[l] > heights[r]){
                r--;
            } else {
                l++;
            }
        }

        return maxArea;

    }
}
