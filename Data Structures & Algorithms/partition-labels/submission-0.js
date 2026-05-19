class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {

        let map = {};

        let result = []

        for(let i = 0; i < S.length; i++){
            map[S[i]] = i;
        }

        let size = 0;
        let end = 0;

        for(let j = 0; j < S.length; j++){
            size++;
            end = Math.max(end, map[S[j]]);
            if(j == end){
                result.push(size);
                size = 0;
            }
        }

        return result;
        

    }
}
