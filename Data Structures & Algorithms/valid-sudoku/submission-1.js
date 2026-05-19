class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for(let i = 0; i < 9; i++)
        {
            let rowSet = new Set();
            for(let j = 0; j < 9; j++)
            {
                if(board[i][j] !== "." && !rowSet.has(board[i][j])){
                    rowSet.add(board[i][j])
                } else if(rowSet.has(board[i][j])) {
                    return false;
                }
            }
        }

        for(let j = 0; j < 9; j++)
        {
            let colSet = new Set()
            for(let i = 0; i < 9; i++)
            {
                if(board[i][j] !== "." && !colSet.has(board[i][j])){
                    colSet.add(board[i][j])
                } else if(colSet.has(board[i][j])) {
                    return false;
                }
            }
        
        }

        for(let i = 0; i < 9; i+=3){
            for(let j = 0; j < 9; j+=3){
                // Take 3x3
                let setMiniGrid = new Set();
                for(let k = i; k < i + 3; k++){
                    for(let y = j; y < j + 3; y++){
                        if(board[k][y] !== "." && !setMiniGrid.has(board[k][y])){
                            setMiniGrid.add(board[k][y])
                        } else if(setMiniGrid.has(board[k][y])) {
                            return false;
                        }
                    }
                }
            }
        }

        return true;




    }
}
