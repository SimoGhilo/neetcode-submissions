class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let water = 0;

        for(let i = 0; i < height.length; i++){

            let maxL = 0;
            let maxR = 0;

            for(let l = 0; l <= i; l++){
                maxL = Math.max(height[l],maxL);
            }
            for(let r = i; r < height.length; r++){
                maxR = Math.max(height[r],maxR);
            }

            let potentialWater = Math.min(maxL,maxR);
            if(potentialWater > 0)
            {
                water += (potentialWater - height[i]);
            }
            
        }

        return water;
    }
}
