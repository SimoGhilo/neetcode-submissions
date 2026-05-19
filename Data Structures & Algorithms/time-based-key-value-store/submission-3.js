class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[])
        }
        this.keyStore.get(key).push([value,timestamp]);
        // KEY store holds key => [[val,time],[val,time]] 
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";

        let left = 0, right = this.keyStore.get(key).length - 1;

        let buckets = this.keyStore.get(key);
        let result = ''

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (buckets[mid][1] === timestamp) return buckets[mid][0];
            if (buckets[mid][1] <= timestamp){
                result = buckets[mid][0]
                left = mid + 1;
            }
            else right = mid - 1;
        }

        return result;
    }
}
