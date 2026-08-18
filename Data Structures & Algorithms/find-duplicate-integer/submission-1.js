class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;
        while (nums[fast]) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) {
                let slow2 = 0;
                while (nums[slow]) {
                    slow = nums[slow];
                    slow2 = nums[slow2];
                    if (slow === slow2) {
                        return slow
                    }
                }
            }
        }
    }
}
