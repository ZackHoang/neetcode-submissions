class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxSubStrLen = 0;
        let l = 0;
        let set = new Set();
        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            maxSubStrLen = Math.max(maxSubStrLen, r - l + 1);
        }
        return maxSubStrLen;
    }
}
