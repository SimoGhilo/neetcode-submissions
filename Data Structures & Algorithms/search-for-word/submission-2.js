class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let m = board.length;
        let n = board[0].length;

        let directions = [[0,1], [0,-1], [1,0], [-1,0]]

        function backtrack(index,i,j,seen){
            if(index == word.length) return true;
            if(i < 0 || j < 0 || i >= m || j >= n || board[i][j] != word[index] || seen.has(`${i}-${j}`)){
                return false;
            }
            seen.add(`${i}-${j}`);
            for(const [di,dj] of directions){
                let newI = di + i;
                let newJ = dj + j;
                if(backtrack(index + 1,newI,newJ,seen)) return true;
            }
            seen.delete(`${i}-${j}`);
            return  false;
        }

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(backtrack(0,i,j,new Set())) return true;
            }
        }

        return false;
    }
}
