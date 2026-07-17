class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxWidth = -1;
        while (left < right) {
            const minHeight = Math.min(heights[right], heights[left]);
            const width = (right - left) * minHeight;
            if (maxWidth < width) {
                maxWidth = width;
            }
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxWidth;
    }
}
