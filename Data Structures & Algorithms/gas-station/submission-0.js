class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        if(cost.reduce((acc,curr) => acc + curr) > gas.reduce((acc,curr) => acc + curr)) return -1;
        let n = gas.length;
        
        let total = 0;
        let res = 0;

        for(let i = 0; i < n; i++){

            total += gas[i] - cost[i]
            if(total < 0){
                total = 0;
                res = i + 1
            } 
    }
    return res;
}

}
