class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let flat = matrix.flat();
        
        let left = 0;
        let right = flat.length - 1;

        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            let guess = flat[mid];

            if(guess == target) return true; 

            if(guess > target){
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }


        return false;
    }
}
