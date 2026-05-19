class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        //transpose matrix
        //reverse nested arrays 
        const n = matrix.length;
        for(let i = 0; i < n; i++){
            for(let j = i + 1; j < n; j++){
                const temp = matrix[i][j]
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        return matrix.map((arr) => arr.reverse());
    }
}
