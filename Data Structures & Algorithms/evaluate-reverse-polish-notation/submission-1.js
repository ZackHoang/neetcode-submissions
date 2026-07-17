class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const token of tokens) {
            if (token !== "+" && token !== "-" && token !== "/" && token !== "*") {
                console.log("Number is", token);
                stack.push(Number(token));
            } else {
                const firstNum = stack.pop();
                const secondNum = stack.pop();
                console.log("firstNum: ", firstNum);
                console.log("secondNum: ", secondNum);
                let result;
                if (token == "+") {
                    result = firstNum + secondNum;
                } else if (token == "-") {
                    result = secondNum - firstNum;
                } else if (token == "*") {
                    result = firstNum * secondNum;
                } else {
                    result = Math.trunc(secondNum / firstNum);
                }
                console.log("Result: ", result);
                stack.push(result);
            }
        }
        return stack.at(-1);
    }
}
