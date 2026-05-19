class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {

        let n = nums.length;

        if(nums.length == 1) return 0;
        
        let queue = [[nums[0], 0]];

        let levels = 0;
        let seen = new Array(n).fill(false);

        while(queue.length > 0){
            let size = queue.length;
            for(let o = 0; o < size; o++){
                let [jump, index] = queue.shift();
                for(let j = index + 1; j <= (index + jump); j++){
                    if (j >= n - 1) return levels + 1;
                    if(!seen[j]){
                        seen[j] = true;
                        queue.push([nums[j],j]);
                    }
                }
            }
            levels++;
        }
        return levels;
    }
}
