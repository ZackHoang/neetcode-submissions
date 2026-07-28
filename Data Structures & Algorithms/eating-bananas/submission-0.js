class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let upperBound = Math.max(...piles);
        let lowerBound = 1;
        let minK = upperBound;
        while (lowerBound <= upperBound) {
            const k = Math.floor((lowerBound + upperBound) / 2);
            let timeTotal = 0;
            for (const pile of piles) {
                timeTotal += Math.ceil(pile / k);
            }
            if (timeTotal <= h) {
                minK = k;
                upperBound = k - 1;
            } else {
                lowerBound = k + 1;
            }
        }
        return minK;
    }
}
