class PrefixTree {
    tree;
    constructor() {
        this.tree = {
            end: false,
            children: {}
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.tree;
        for(let i = 0; i < word.length; i++){
            if(!(word[i] in curr.children)){
                curr.children[word[i]] = {end:false,children:{}}
            }
            curr = curr.children[word[i]];
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.tree;
        for(let i = 0; i < word.length; i++){
            if(!(word[i] in curr.children)){
                return false;
            }
            curr = curr.children[word[i]]
        }
        return curr.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.tree;
        for(let i = 0; i < prefix.length; i++){
            if(!(prefix[i] in curr.children)){
                return false;
            }
            curr = curr.children[prefix[i]];
        }
        return true;
    }
}
