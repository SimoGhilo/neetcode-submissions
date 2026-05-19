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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let ret = true;

        intervals.sort((a,b) => a.start - b.start)

        for(let i = 0; i < intervals.length; i++){

            let currInterval = intervals[i];
            let nextInterval = intervals[i + 1] || null;

            if(nextInterval && currInterval.end > nextInterval.start){
                ret = false;
            }
        }

        

        return ret
    }
}
