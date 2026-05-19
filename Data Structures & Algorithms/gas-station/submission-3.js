class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        // keep total and if < 0 reset to 0
        // if starting point is positive and does not go negative
        // return
        const sumGas = gas.reduce((acc,curr) => acc + curr);
        const sumCost = cost.reduce((acc,curr) => acc + curr);
        if(sumCost > sumGas) return -1;

        const diff = gas.map((g,i) => g - cost[i]);
        
        let total = 0;
        let index = 0;

        let i = 0;

        while(i < diff.length){
            total += diff[i];
            
            if(total < 0){
                total = 0;
                index = i + 1;
            }
            i++
        }
        console.log(diff)
        return index;
    }
}
