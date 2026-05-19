class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const m = board.length;
        const n = board[0].length;

        //Check row
        for(let i = 0; i < m; i++){
            const setRow = new Set();
            for(let j = 0; j < n; j++){
                if(setRow.has(board[i][j])){
                    return false;
                }
                if(board[i][j] != '.'){
                    setRow.add(board[i][j])
                }
            }
        }

        //Check col
        for(let j = 0; j < n; j++){
            const setCol = new Set();
            for(let i = 0; i < m ; i++){
                if(setCol.has(board[i][j])){
                    return false;
                }
                if(board[i][j] != '.'){
                    setCol.add(board[i][j])
                }
            }
        }

        //Check submatrix
        for(let i = 0; i < m - 3; i+=3){
            for(let j = 0; j < n - 3; j+=3){

                const setSub = new Set();

                for(let k = i; k < i + 3; k++){
                    for(let y = j; y < j + 3; y++){
                        if(setSub.has(board[k][y])){
                            return false;
                        }
                        if(board[k][y] != '.'){
                            setSub.add(board[k][y])
                        }
                    }
                }
            }
        }

        return true;


    }


}
