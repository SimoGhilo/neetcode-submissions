/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        
        const starts = [];
        const ends = [];

        for(const interval of intervals){
            starts.push(interval.start);
            ends.push(interval.end);
        }

        starts.sort((a,b) => a - b);
        ends.sort((a,b) => a - b);

        const n = intervals.length;
        let s = 0;
        let e = 0;
        let count = 0;
        let maxCount = 0;

        while(s < n){
            if(starts[s] < ends[e]){
                s++;
                count++
            } else {
                e++
                count--
            }
            maxCount = Math.max(maxCount,count);
        }

        return maxCount;
    }
}
