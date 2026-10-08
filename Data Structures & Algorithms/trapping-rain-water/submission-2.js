class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        const heightLeft = new Array(n).fill(0);
        const heightRight = new Array(n).fill(0);

        let maxL = height[0];
        for(let i = 0; i < n; i++){
            heightLeft[i] = Math.max(height[i],maxL)
            maxL = Math.max(height[i],maxL)
        }
        let maxR = height[n - 1];
        for(let i = n - 1; i >= 0; i--){
            heightRight[i] = Math.max(height[i],maxR)
            maxR = Math.max(height[i],maxR)
        }

        let i = 0;
        let tot = 0;
        while(i < n){
            const water = Math.min(heightLeft[i],heightRight[i]) - height[i];
            tot += water;
            i++
        }
        return tot;
    }
}
