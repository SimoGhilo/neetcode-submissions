class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let distances = points.map((point) => {

            let x = point[0];
            let y = point[1];
            let eucDist = Math.sqrt(Math.pow((x - 0),2) + Math.pow((y - 0),2));
            return [point[0], point[1], eucDist];
        });

         distances.sort((a,b) => a[2] - b[2]);

        // return distances;

          return distances.slice(0,k).map((dist) => dist.slice(0, - 1));
    }

   
}
