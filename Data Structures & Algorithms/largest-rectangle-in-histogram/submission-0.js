

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [] // [index, height[i]]
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
                let lastIndex = stack.pop();
                let height = heights[lastIndex];
                let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        // Process all remaining bars in the stack
        while (stack.length > 0) {
            let lastIndex = stack.pop();
            let height = heights[lastIndex];
            let width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}


