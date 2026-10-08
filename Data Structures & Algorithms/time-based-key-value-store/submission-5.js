class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        const collection = this.keyStore.get(key);

        let l = 0;
        let r = collection.length - 1;
        let result = "";

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (collection[mid][1] === timestamp) {
                return collection[mid][0];
            }

            if (collection[mid][1] < timestamp) {
                // Valid candidate, but there might be a later one
                result = collection[mid][0];
                l = mid + 1;
            } else {
                // Timestamp is too large
                r = mid - 1;
            }
        }

        return result;
    }
}