class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const flat = matrix.flat();
        let l = 0;
        let r = flat.length - 1;
        
        while(l < r){
            const mid = Math.floor((l + r) / 2);
            if(flat[mid] == target) return true;
            if(flat[mid] > target){
                r = mid
            } else {
                l = mid + 1
            }
        }
        return flat[l] == target;
    }
}
