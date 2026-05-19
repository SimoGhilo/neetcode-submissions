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
        intervals.sort((a,b) => a.start - b.start);

        let days = 0;

        let starts = [];
        let ends = [];

        for(let i = 0; i < intervals.length; i++){
            starts.push(intervals[i].start);
            ends.push(intervals[i].end);
        }

        starts.sort((a,b) => a - b);
        ends.sort((a,b) => a - b);

        let startPointer = 0;
        let endPointer = 0;

        while(startPointer < starts.length && endPointer < ends.length){
            if(starts[startPointer] >= ends[endPointer]){
                endPointer++;
            } else {
                days++;
            }
            startPointer++;
        }
        
        return days;
    }
}
