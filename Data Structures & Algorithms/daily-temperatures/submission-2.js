class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const n = temperatures.length;
        const solution = new Array(n).fill(0);

        for(let i = 0; i < n; i++){
            if(stack.length <= 0){
                stack.push(i)
                continue;
            }

            let top = stack[stack.length - 1];
            let element = temperatures[top];

            while(element < temperatures[i]){
                const j = stack.pop();
                solution[j] = i - j;
                top = stack[stack.length - 1];
                element = temperatures[top];
            }
            stack.push(i)
        }

        return solution;
    }
}
