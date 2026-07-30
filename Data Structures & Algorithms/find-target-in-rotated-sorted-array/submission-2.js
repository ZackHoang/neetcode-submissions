class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        let pivot = left;
        left = 0;
        right = nums.length - 1;

        if (target >= nums[pivot] && target <= nums[right]) {
            left = pivot
        } else {
            right = pivot - 1;
        }

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
