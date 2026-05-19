class PrefixTree {

    data;

    constructor() {
        this.data = [];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        this.data.push(word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        let flag = false;

        for(const w of this.data){
            if(word == w){
                flag = true;
            }
        }

        return flag;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let flag = false;

        for(const w of this.data){
            if(w.startsWith(prefix)){
                flag = true;
            }
        }

        return flag;
    }
}
