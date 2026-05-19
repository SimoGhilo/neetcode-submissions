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
            this.keyStore.set(key,[[value,timestamp]]);
        } else {
            this.keyStore.get(key).push([value,timestamp])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        let entries = this.keyStore.get(key);
        let left = 0, right = entries.length - 1;

        // Perform binary search to find the closest timestamp <= the given timestamp
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (entries[mid][1] === timestamp) {
                return entries[mid][0];
            } else if (entries[mid][1] < timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // If there's no exact match, right will end up at the largest timestamp <= given timestamp
        return right >= 0 ? entries[right][0] : "";
    }


}
