class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let m = matrix.length;
        let n = matrix[0].length;

        let flatArray = [];

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                flatArray.push(matrix[i][j])
            }
        }

        let left = 0;
        let right = flatArray.length -1;

        while(left <= right){
            let mid = Math.floor((left + right) / 2);

            if(flatArray[mid] == target){
                return true;
            } else if (flatArray[mid] > target){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return false;
    }
}
