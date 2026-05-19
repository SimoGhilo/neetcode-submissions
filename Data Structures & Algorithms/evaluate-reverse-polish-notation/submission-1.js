class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operands = ['+', '-', '*', '/'];

        for (const t of tokens) {
            if (!operands.includes(t)) {
                // Push numbers to the stack (convert to integer)
                stack.push(parseInt(t));
            } else {
                // Pop the last two numbers from the stack
                const b = stack.pop();
                const a = stack.pop();

                // Apply the operator
                let result;
                switch (t) {
                    case '+':
                        result = a + b;
                        break;
                    case '-':
                        result = a - b;
                        break;
                    case '*':
                        result = a * b;
                        break;
                    case '/':
                        // Truncate division towards zero
                        result = Math.trunc(a / b);
                        break;
                }

                // Push the result back to the stack
                stack.push(result);
            }
        }

        // The final result should be the last item in the stack
        return stack.pop();
    }
}
