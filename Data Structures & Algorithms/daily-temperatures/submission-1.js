class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [] // high --> low , will hold [temp, index]
        let result = new Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            // While stack is not empty and the current temperature is greater than the one at the top of the stack
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let indexOfDays = stack.pop();  // Pop the index of the day
                result[indexOfDays] = i - indexOfDays;  // Calculate the number of days to the warmer temperature
            }
            // Push the current temperature's index to the stack
            stack.push(i);
        }

        return result;
    }
}
