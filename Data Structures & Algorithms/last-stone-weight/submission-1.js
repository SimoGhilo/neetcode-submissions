class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    smashStones(a,b){
        if(a && !b) return a;
        if(!a && !b ) return null;
        if(a == b) return null;

        if(a > b){
            return a - b;
        } else {
            return b - a;
        }
    }


    lastStoneWeight(stones) {

        while(stones.length > 0){
            stones.sort((a,b) => a - b);
            let a = stones.pop();
            let b = stones.pop();
            if(!b) return a;
            if(this.smashStones(a,b) != null){
                stones.unshift(this.smashStones(a,b));
            }
            
        }

        if(stones.length == 0) return 0;

        return stones[0];
    }
}
