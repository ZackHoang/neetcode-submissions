class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
         const n = height.length;
        const maxLeft = new Array(n);
        const maxRight = new Array(n);

        maxLeft[0] = height[0];
        for (let i = 1; i < n; i++) {
            maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
        }

        maxRight[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            maxRight[i] = Math.max(maxRight[i + 1], height[i]);
        }

        let water = 0;

        for (let i = 0; i < n; i++) {
            water += Math.min(maxLeft[i], maxRight[i]) - height[i];
        }

        return water;
    }
}
