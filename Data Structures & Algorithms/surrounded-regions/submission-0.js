class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let m = board.length;
        let n = board[0].length;

        // Directions: right, left, down, up
        let directions = [[0,1], [0, -1], [1, 0], [-1, 0]];

        var dfs = (r, c) => {
            // If out of bounds or not an 'O', return
            if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== 'O') return;

            // Mark this cell as visited
            board[r][c] = '#';

            // Explore all 4 possible directions
            for (const [dr, dc] of directions) {
                let newR = r + dr;
                let newC = c + dc;
                dfs(newR, newC);  // Recursively visit neighboring cells
            }
        };

        // 1. Start DFS from all boundary 'O' cells
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                // Only start DFS on 'O' cells on the boundary
                if ((i === 0 || j === 0 || i === m - 1 || j === n - 1) && board[i][j] === 'O') {
                    dfs(i, j);
                }
            }
        }

        // 2. After DFS:
        // - Replace all inner 'O' cells with 'X' (captured 'O's)
        // - Revert '#' cells back to 'O' (boundary-connected 'O's)
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 'O') {
                    board[i][j] = 'X';  // Mark 'O' cells that are surrounded by 'X'
                }
                if (board[i][j] === '#') {
                    board[i][j] = 'O';  // Revert boundary-connected 'O' cells
                }
            }
        }

        return board;
    }
}
