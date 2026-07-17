class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduct = [];
        const postfixProduct = [];
        let sum = 1;
        for (let i = 0; i < nums.length; i++) {
            sum *= nums[i];
            prefixProduct.push(sum);
        }
        sum = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            sum *= nums[i];
            postfixProduct.unshift(sum);
        }
        for (let i = 0; i < nums.length; i++) {
            let prefix = i - 1 >= 0 ? prefixProduct[i - 1] : 1;
            let postfix = i + 1 <= nums.length - 1 ? postfixProduct[i + 1] : 1;
            nums[i] = prefix * postfix;
        }
        return nums;
    }
}
