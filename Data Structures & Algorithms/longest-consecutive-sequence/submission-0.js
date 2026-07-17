class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLength = 0;
        for (const num of set) {
            if (!set.has(num - 1)) {
                let currNum = num;
                let streak = 1;
                while (set.has(currNum + 1)) {
                    currNum += 1;
                    streak += 1;
                }
                if (maxLength <= streak) {
                    maxLength = streak;
                }
            }
        }
        return maxLength;
    }
}
