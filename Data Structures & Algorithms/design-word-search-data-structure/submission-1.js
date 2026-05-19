class WordDictionary {
    trie;
    constructor() {
        this.trie = {
            end:false,
            children:{}
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.trie;

        for(const char of word){
            if(!(char in curr.children)){
                curr.children[char] = {end:false, children:{}}
            }
            curr = curr.children[char]
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.backtrack(this.trie,0,word)
    }

    backtrack(node,index,word){
        if(index == word.length){
            return node.end;
        }
        let char = word[index];
        if(char != '.'){
            if(!(char in node.children)) return false;
            return this.backtrack(node.children[char],index + 1,word)
        } else {
            for(const key in node.children){
                if(this.backtrack(node.children[key],index + 1,word)) return true;

            }
        }
        return false;
    }
}
