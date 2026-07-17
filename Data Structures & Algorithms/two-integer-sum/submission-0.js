class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const myMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (myMap.has(complement)) {
            return [myMap.get(complement), i];
        }
        myMap.set(num, i);
    }
       return []; 
    }
}
