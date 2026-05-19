class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;

        let rows = [];
        let cols = []

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(matrix[i][j] == 0){
                    rows.push(i);
                    cols.push(j)
                }
            }
        }

        for(let i = 0; i < m; i++){
            if(rows.includes(i)){
                for(let j = 0; j < n; j++){
                    matrix[i][j] = 0;
                }
            }
            for(let j = 0; j < n; j++){
                if(cols.includes(j)){
                    for(let k = 0; k < m; k ++){
                        matrix[k][j] = 0
                    }
                }
            }
        }

        return matrix;
    }
}
