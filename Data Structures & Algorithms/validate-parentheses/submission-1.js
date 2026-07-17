class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length == 0) {
            return false
        }
        const stack = [];
        const hash = {
            "]" : "[",
            "}" : "{",
            ")" : "("
        };
        for (const char of s) {
            if (char == "(" || char == "[" || char == "{") {
                stack.push(char);
            } else if (stack.pop() != hash[char]) {
                console.log(char);
                console.log(stack[stack.length - 1]);
                console.log(hash[stack[stack.length - 1]]);
                return false;
            }
        }
        return stack.length == 0 ? true : false;
    }
}
