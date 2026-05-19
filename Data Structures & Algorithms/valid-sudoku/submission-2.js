class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        let m = board.length;
        let n = board[0].length;

        for(let i = 0; i < m; i++){
            let rowSet = new Set();
            for(let j = 0; j < n; j++){
                if(rowSet.has(board[i][j])) return false;
                if(board[i][j] != '.'){
                    rowSet.add(board[i][j])
                }
            }
        }

        for(let j = 0; j < n; j++){
            let colSet = new Set();
            for(let i = 0; i < m; i++){
                if(colSet.has(board[i][j])) return false;
                if(board[i][j] != '.'){
                    colSet.add(board[i][j])
                }  
            }
        }

        for(let i = 0; i < m; i+=3){
            for(let j = 0; j < n; j+=3){
                let setSquare = new Set();
                for(let k = i; k < i + 3; k++){
                    for(let y = j; y < j + 3; y++){
                        if(setSquare.has(board[k][y])) return false;
                        if(board[k][y] != '.'){
                            setSquare.add(board[k][y])
                        }
                    }
                }
            }
        }

        return true;
        
    }
}
