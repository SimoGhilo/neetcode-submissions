class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // We need a given k value that will be deducted from the pile
        // k is bananas per h
        // if k > pile[i] cannot go to other pile
        // return min k such that you can eat all piles within h
        // to eat a pile is pile[i] / k 
        // Binary search from 1 to max(...piles)

        let left = 1;
        let right = Math.max(...piles);

        let minK = Math.max(...piles);

        while(left <= right){
            let k = Math.floor((left + right) / 2);
            let flag = true;
            let hours = 0
            for(const pile of piles){
                hours += Math.ceil(pile / k)
            }
            if(hours > h){
                flag = false;
                left = k + 1
            }
            if(flag){
                minK = Math.min(k,minK)
                right = k - 1;
                
            }
        }

        return minK

    }
}
