class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [0];
        const result = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length > 0 && t > stack.at(-1)[0]) {
                const [stackT, stackInd] = stack.pop();
                result[stackInd] = i - stackInd;
            }
            stack.push([t, i]);
        }
        return result;
    }
}
