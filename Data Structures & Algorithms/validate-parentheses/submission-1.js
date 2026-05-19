class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];

        let opening = ['(', '[', '{']

        for(const bracket of s){
            if(opening.includes(bracket)){
                stack.push(bracket);
            } else {
                // If is a closing bracket
                if(stack.length <= 0) return false;

                let topElement = stack[stack.length - 1];

                switch(bracket){
                    case ')':

                        if(topElement == '('){
                            stack.pop();
                        } else {
                            return false;
                        }
                    break;

                    case ']':
                        if(topElement == '['){
                            stack.pop();
                        } else {
                            return false;
                        }
                    break;

                    case '}':
                        if(topElement == '{'){
                            stack.pop();
                        } else {
                            return false;
                        }  
                    break;      
                }
            }
        }

        return stack.length == 0;
    }
}
