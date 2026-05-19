class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];
        let i = 0;
        let startNew = newInterval[0];
        let endNew = newInterval[1];

        // Add all intervals that end before the new interval starts
        while (i < intervals.length && intervals[i][1] < startNew) {
            result.push(intervals[i]);
            i++;
        }

        // Merge overlapping intervals
        while (i < intervals.length && intervals[i][0] <= endNew) {
            startNew = Math.min(startNew, intervals[i][0]);
            endNew = Math.max(endNew, intervals[i][1]);
            i++;
        }
        result.push([startNew, endNew]);  // Add the merged interval

        // Add all intervals that start after the new interval ends
        while (i < intervals.length) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
