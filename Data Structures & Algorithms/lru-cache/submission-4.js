class LRUCache {
    /**
     * @param {number} capacity
     */
    cache;
    capacity;
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;
        
        // Refresh recency order
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(!this.cache.has(key)){
            //Does not have key
            if(this.capacity == this.cache.size){
                //Remove LRU KVP
                const LRUKey = this.cache.keys().next().value;
                this.cache.delete(LRUKey);
            }
            this.cache.set(key,value);
        } else {
            //Remove old value
            this.cache.delete(key);
            this.cache.set(key,value);
        }

    }
}
