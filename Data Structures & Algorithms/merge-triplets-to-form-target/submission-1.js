class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {

        for(const triplet of triplets){
            const [a,b,c] = triplet;
            if(target[0] == a 
            && target[1] == b
            && target[2] == c) return true;
        }

        const firstTarget = target[0];
        const secondTarget = target[1];
        const thirdTarget = target[2];

        for(let i = 0; i < triplets.length; i++){
            const first = triplets[i][0];
            const second = triplets[i][1];
            const third = triplets[i][2];
            if(first > firstTarget 
            || second > secondTarget
            || third  > thirdTarget){
                triplets.splice(i,1);
                i--;
            }
        }

        const arrayTarget = new Array(3).fill(false);

        for(let i = 0; i < triplets.length; i++){
            const triplet = triplets[i];

            const [a,b,c] = triplet;
            if(target[0] == a) {arrayTarget[0] = true}
            if(target[1] == b) {arrayTarget[1] = true}
            if(target[2] == c) {arrayTarget[2] = true}
        }
        return arrayTarget.every((bool) => bool == true);
    }
}
