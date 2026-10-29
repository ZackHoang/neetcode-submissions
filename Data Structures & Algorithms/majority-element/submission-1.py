from collections import Counter

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = defaultdict(int)
        res = max_count = 0

        for num in nums:
            count[num] += 1
            if max_count < count[num]:
                res = num
                max_count = count[num]
        return res
        