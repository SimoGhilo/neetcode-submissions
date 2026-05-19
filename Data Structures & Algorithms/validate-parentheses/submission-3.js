class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let opening = ['{', '(', '[']
        let closing = ['}', ')', ']']

        for(const bracket of s){
            // If opening
            if(opening.includes(bracket)){
                stack.push(bracket)
            } else {
                // If closing
                if(stack.length <= 0) return false;

                let top = stack[stack.length - 1]

                if(closing.includes(top) && stack.length == 0) return false;

                if((top == '(' && bracket == ')') || (top == '[' && bracket == ']') || (top == '{' && bracket == '}')){
                    stack.pop()
                } else {
                    return false;
                }

            }
        }

        return stack.length == 0;
    }
}
