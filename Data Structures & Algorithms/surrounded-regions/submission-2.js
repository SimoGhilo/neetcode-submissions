class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let m = board.length;
        let n = board[0].length;
        let directions = [[0,1], [0,-1], [1,0], [-1,0]];

        function DFSInvalidate(currI,currJ,seen){
            if(currI >= m || currJ >= n 
            || currJ < 0 || currI < 0 
            || board[currI][currJ] == '#'
            || seen.has(`${currI}-${currJ}`)
            || board[currI][currJ] == 'X') return;

            seen.add(`${currI}-${currJ}`);
            board[currI][currJ] = '#';
            for(const [di,dj] of directions){
                let newI = di + currI;
                let newJ = dj + currJ;
                DFSInvalidate(newI,newJ,seen)
            }

        }

        //Mark # bordering o
        for(let j = 0; j < n; j++){
            if(board[0][j] == 'O'){
                DFSInvalidate(0,j,new Set())
            }
        }

        for(let i = 0; i < m; i++){
            if(board[i][n - 1] == 'O'){
                DFSInvalidate(i,n-1,new Set());
            }
        }
        for(let j = 0; j < n; j++){
            if(board[m - 1][j] == 'O'){
                DFSInvalidate(m - 1,j, new Set());
            }
        }
        for(let i = 0; i < m; i++){
            if(board[i][0] == 'O'){
                DFSInvalidate(i,0,new Set());
            }
        }
        
        function DFS(currI,currJ,seen){
            if(currI >= m || currJ >= n 
            || currJ < 0 || currI < 0 
            || board[currI][currJ] == '#'
            || seen.has(`${currI}-${currJ}`)) return;

            seen.add(`${currI}-${currJ}`);
            board[currI][currJ] = 'X';
            for(const [di,dj] of directions){
                let newI = di + currI;
                let newJ = dj + currJ;
                DFS(newI,newJ,seen)
            }

        }

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                DFS(i,j,new Set());
            }
        }

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(board[i][j] == '#'){
                    board[i][j] = 'O';
                }
            }
        }

        return board;

    }
}
