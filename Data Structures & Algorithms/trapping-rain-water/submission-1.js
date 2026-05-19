class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let n = height.length;
        let leftArray = new Array(n).fill(0);
        let rightArray = new Array(n).fill(0);


        leftArray[0] = height[0]; 
        for (let i = 1; i < n; i++) {
            leftArray[i] = Math.max(leftArray[i - 1], height[i]);
        }

        rightArray[n - 1] = height[n - 1];  
        for (let i = n - 2; i >= 0; i--) {
            rightArray[i] = Math.max(rightArray[i + 1], height[i]);
        }

        let total = 0;

        for(let i = 0; i < n; i++){
            let h = height[i];
            let water = Math.min(leftArray[i], rightArray[i]) - h;
            total += water

        }

        return total;
    }
}
