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
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({
            value: value,
            timestamp: timestamp,
        });
        console.log("current map: ", this.keyStore);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const val = this.keyStore.get(key);
        if (val === undefined) {
            return "";
        } else {
            let left = 0;
            let right = val.length - 1;
            let result = '';
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (val[mid].timestamp <= timestamp) {
                    result = val[mid].value;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return result;
        }
    }
}
