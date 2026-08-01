class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
        canEat(k, h, piles) {
            let hours = 0;

            for (let pile of piles) {
                hours += Math.ceil(pile / k);
            }

            return hours <= h;
        }
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        while(l <= r){
            const mid = Math.floor((l + r) / 2);
            const canEat = this.canEat(mid,h,piles);
            if(canEat){
                //look left
                r = mid - 1;
            } else {
                //look right
                l = mid + 1
            }
        }
        return l;
    }
}
