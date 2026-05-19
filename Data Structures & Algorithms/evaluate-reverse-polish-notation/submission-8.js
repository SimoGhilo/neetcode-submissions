class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ['+', '-', '/', '*']

        for(const token of tokens){
            if(operators.includes(token)){
                const a = stack.pop();
                const b = stack.pop();
                let result = 0;
                switch(token){
                    case '+':
                    result = parseInt(a) + parseInt(b);
                    break;
                    case '-':
                    result = parseInt(b) - parseInt(a)
                    break;
                    case '*':
                    result = parseInt(a) * parseInt(b);
                    break;
                    case '/':
                    result = Math.trunc(b / a);
                    break;
                }

                stack.push(result);
            } else {
                stack.push(parseInt(token))
            }
        }
        console.log(stack)
        return stack.reduce((acc,curr) => acc + curr, 0)
    }
}
