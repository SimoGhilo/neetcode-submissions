class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        matrix.reverse();

        for(let i= 0; i < matrix.length; i++){
            for(let j = i; j < matrix[i].length; j++){
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }

        return matrix;
    }
}
