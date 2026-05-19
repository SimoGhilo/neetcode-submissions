class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[1] - b[1]);
        console.log(intervals)
        let n = intervals.length;
        let count = 0;

        let result = [intervals[0]];

        for(let i = 1; i < n; i++){
            let topEnd = result[result.length - 1][1];
            let currStart = intervals[i][0];

            if(currStart >= topEnd){
                result.push(intervals[i]);
            } else {
                count++;
            }
        }
        return count;
    }
}
