class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        
        let m = board.length;
        let n = board[0].length;

        let visited = new Array(m).fill(false).map(() => new Array(n).fill(false));

        function DFS(currI,currJ, currWord){
            // Base cases
            if(currI >= m || currJ >= n || currI < 0 || currJ < 0) return currWord == word;
            if(currWord == word) return true;
            if(visited[currI][currJ]){
                return currWord == word;
            }

            // Processing phase

            visited[currI][currJ] = true;

            currWord +=  board[currI][currJ];

            // Recursive cases

            if(DFS(currI + 1, currJ, currWord) || DFS(currI - 1, currJ, currWord) || DFS(currI, currJ + 1, currWord) || DFS(currI, currJ - 1, currWord)){
                return true;
            }

            //backtracking

            visited[currI][currJ] = false;

            currWord = currWord.slice(0, -1);
        }

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(DFS(i,j, '')) return true;
            }
        }

        return false;
    }
}
