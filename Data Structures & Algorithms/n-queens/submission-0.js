class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    // Add a queen to each r 
    // Base case when r == n
    // Try and add a queen if in c there is not queen already

    //Use sets to track diagonals and cols positions used
    // r - c for tracking negative diagonals
    // r + c for tracking positive diagonals

    solveNQueens(n) {
        let solution = [];

        function backtrack(board,row,cols,posDiag,negDiag){
          if(row == n){
            solution.push(board.map(row => row.join('')));
            return;
          }

          for(let c = 0; c < n; c++){
            if(cols.has(c) || posDiag.has(row + c) 
            || negDiag.has(row - c)) continue;

            board[row][c] = 'Q';

            cols.add(c);
            posDiag.add(row + c);
            negDiag.add(row - c);
            //recurse
            backtrack(board,row + 1, cols,posDiag,negDiag);
            //backtrack
            board[row][c] = '.';
            cols.delete(c);
            posDiag.delete(row + c);
            negDiag.delete(row - c);

          }
            
        }

        const board = Array.from({ length: n }, () => Array(n).fill('.'));

        backtrack(board,0, new Set(), new Set(), new Set());
        return solution;

    }
}
