class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            const guess = numbers[left] + numbers[right];
            if(guess == target) { 
                return [left + 1,right + 1]
            };
            if(guess > target){
                right --;
            } else {
                left++;
            }
        }
    }
}
