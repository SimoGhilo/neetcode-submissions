class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        let n = hand.length;
        if(n % groupSize != 0) return false;

        let hashMap = new Map();

        for(const num of hand){
            if(!hashMap.has(num)){
                hashMap.set(num, 1)
            } else {
                hashMap.set(num, hashMap.get(num) + 1);
            }
        }
        console.log(hashMap)
        //Hash map holds value => frequency
        hand.sort((a,b) => a - b);

        for (const num of hand) {
            if (!hashMap.has(num)) continue;

            for (let i = 0; i < groupSize; i++) {
                const curr = num + i;
                if (!hashMap.has(curr)) return false;

                const count = hashMap.get(curr);
                if (count === 1) {
                    hashMap.delete(curr);
                } else {
                    hashMap.set(curr, count - 1);
                }
            }
        }
        

        return true;
    }
}
