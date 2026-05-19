class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = []; // [index, height]

        for (let i = 0; i < heights.length; i++) {
            const h = heights[i];

            let startIndex = i;

            // pop while current height is smaller
            while (stack.length && stack[stack.length - 1][1] > h) {
                const [index, height] = stack.pop();

                // width = current index - left boundary
                maxArea = Math.max(maxArea, (i - index) * height);

                // we carry the leftmost valid index forward
                startIndex = index;
            }

            // push current bar with its correct left boundary
            stack.push([startIndex, h]);
        }

        // process remaining stack
        for (let i = 0; i < stack.length; i++) {
            const [index, height] = stack[i];
            maxArea = Math.max(maxArea, (heights.length - index) * height);
        }

        return maxArea;
    }
}