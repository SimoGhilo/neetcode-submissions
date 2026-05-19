class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        //linear search on i
        // if result is empty, push
        // if i start <= result[-1][1] -> merge the top
        // else push to result

        let result = [];
        let n = intervals.length;
        intervals.sort((a,b) => a[0] - b[0]);

        for(let i = 0; i < n; i++){
            if(result.length <= 0){
                result.push(intervals[i]);
                continue;
            }

            let startCurr = intervals[i][0];
            let topEnd = result[result.length - 1][1];
            if(startCurr <= topEnd){
                let merged = [Math.min(startCurr, result[result.length - 1][0]), Math.max(topEnd,intervals[i][1])];
                result.pop();
                result.push(merged);
            } else {
                result.push(intervals[i])
            }
        }

        return result;
    }

    }

