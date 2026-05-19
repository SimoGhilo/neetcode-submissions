class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = ['+', '-', '/', '*'];

        for (const token of tokens) {
            if (!operators.includes(token)) {
                // Push the number as an integer
                stack.push(parseInt(token));
            } else {
                // Pop the top two values
                let a = stack.pop();
                let b = stack.pop();

                // Perform the operation based on the operator
                switch (token) {
                    case '+':
                        stack.push(b + a);
                        break;
                    case '-':
                        stack.push(b - a);
                        break;
                    case '/':
                        stack.push(b / a > 0 ? Math.floor(b / a) : Math.ceil(b / a));
                        break;
                    case '*':
                        stack.push(b * a);
                        break;
                }
            }
        }

        return stack[stack.length - 1];  // Return the final result
    }
}
