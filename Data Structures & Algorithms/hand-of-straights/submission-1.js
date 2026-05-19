class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {

        if(hand.length % groupSize != 0) return false;

        hand.sort((a,b) => a - b);

        let map = new Map();

        for(const n of hand){
            if(!map.has(n)){
                map.set(n, 1)
            } else {
                map.set(n, map.get(n) + 1)
            }
        }

        for (const num of hand) {
            if (map.get(num) > 0) {
                for (let i = num; i < num + groupSize; i++) {
                    if (!map.has(i)) return false;
                    map.set(i, map.get(i) - 1);
                }
            }
        }

        

        return true;
    }
}
