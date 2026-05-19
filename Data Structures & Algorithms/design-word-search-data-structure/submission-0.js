class TrieNode{
    constructor(){
        this.children = new Map();
        this.endWord = false;
    }
}


class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for(const c of word){

            if(!curr.children.has(c))
            {
                curr.children.set(c, new TrieNode());
            } 
            curr = curr.children.get(c);
        }

        curr.endWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (node, index) => {
            if (index === word.length) return node.endWord;

            const char = word[index];
            if (char === '.') { // '.' matches any character
                for (const child of node.children.values()) {
                    if (dfs(child, index + 1)) return true;
                }
                return false;
            } else {
                if (!node.children.has(char)) return false;
                return dfs(node.children.get(char), index + 1);
            }
        };

        return dfs(this.root, 0);
    }
}
