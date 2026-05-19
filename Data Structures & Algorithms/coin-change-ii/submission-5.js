class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const cache = {};

        function DFS(i,a){
            if(a > amount){
                cache[`${i}-${a}`] = 0;
                return cache[`${i}-${a}`];
            };
            if(a == amount){
                cache[`${i}-${a}`] = 1;
                return cache[`${i}-${a}`];
            };
            if(i == coins.length){
                if(a == amount){
                    cache[`${i}-${a}`] = 1;
                    return cache[`${i}-${a}`];
                } else {
                    cache[`${i}-${a}`] = 0;
                    return cache[`${i}-${a}`];
                }
            } 

            if(`${i}-${a}` in cache) return cache[`${i}-${a}`]

            cache[`${i}-${a}`] = DFS(i,a + coins[i]) + DFS(i + 1,a)

            return cache[`${i}-${a}`]
        }

        return DFS(0,0);
    }
}
