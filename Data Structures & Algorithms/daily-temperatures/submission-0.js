class Solution {
    dailyTemperatures(temperatures) {
        let stack = [];
        let sol = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let idx = stack.pop();
                sol[idx] = i - idx; // Calculate the number of days until a warmer temperature
            }
            stack.push(i); // Push current index onto the stack
        }

        return sol;
    }
}
