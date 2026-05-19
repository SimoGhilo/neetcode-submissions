class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        // build hash map
        // keep track of size, end is updated at every iteration (if last > end)
        // if size - 1 == end is a partition
        const map = new Map();
        for(let i = 0; i < S.length; i++){
            map.set(S[i],i);
        }

        let size = 0;
        let end = 0;
        const output = [];

        for(let i = 0; i < S.length; i++){
            const lastIndex = map.get(S[i]);
            if(lastIndex > end){
                end = lastIndex;
            }
            size++;
            if(end == i){
                output.push(size);
                size = 0;
            }
        }   

        return output;
    }
}
