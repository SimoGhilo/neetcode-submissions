class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = { children: {} };

        // Build Trie
        for (const word of words) {
            let node = trie;
            for (const char of word) {
                if (!(char in node.children)) {
                    node.children[char] = { children: {} };
                }
                node = node.children[char];
            }
            node.word = word; // store full word at end node
        }

        const m = board.length;
        const n = board[0].length;
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        const result = [];

        function DFS(i, j, node, visited) {
            const char = board[i][j];
            if (!(char in node.children)) return;

            const nextNode = node.children[char];
            if (nextNode.word !== undefined) {
                result.push(nextNode.word);
                delete nextNode.word; // avoid duplicates
            }

            visited.add(`${i}-${j}`);

            for (const [di, dj] of directions) {
                const ni = i + di;
                const nj = j + dj;
                if (
                    ni >= 0 && ni < m &&
                    nj >= 0 && nj < n &&
                    !visited.has(`${ni}-${nj}`)
                ) {
                    DFS(ni, nj, nextNode, visited);
                }
            }

            visited.delete(`${i}-${j}`);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                DFS(i, j, trie, new Set());
            }
        }

        return result;
    }
}
