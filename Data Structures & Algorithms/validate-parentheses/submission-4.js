class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const opening = ['(', '[', '{'];
        const closing = [')', ']', '}']

        for(const n of s){
            if(stack.length == 0){
                stack.push(n)
            } else {

                const top = stack[stack.length - 1];
                if(closing.includes(top) && closing.includes(top)) return false;

                if((top == '(' && n == ')') || (top == '[' && n == ']') || (top == '{' && n == '}')){
                    stack.pop();
                } else {
                    stack.push(n)
                }

            }
        }

        return stack.length == 0;

    }
}
