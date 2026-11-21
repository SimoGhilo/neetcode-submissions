class PrefixTree {
    tree = null;
    constructor() {
        this.tree = {
            children : {}
        };
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.tree;
        let i = 0;
        while(i < word.length){
            if(!(word[i] in curr.children)){
                curr.children[word[i]] = {
                    children : {},
                    end : false
                }
            } 
            curr = curr.children[word[i]];
            i++;
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.tree;
        let i = 0;
        while(i < word.length){
            if(word[i] in curr.children){
                curr = curr.children[word[i]];
                i++;
            } else {
                return false;
            }
        }
        return curr.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.tree;
        let i = 0;
        while(i < prefix.length){
            if(prefix[i] in curr.children){
                curr = curr.children[prefix[i]];
                i++;
            } else {
                return false;
            }
        }
        return true;
    }
}
