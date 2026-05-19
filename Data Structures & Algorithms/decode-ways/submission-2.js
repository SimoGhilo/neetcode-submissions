class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
       // leading 0 not allowed
        const cache = {};
        const n = s.length;

        function DFS(i){
            if(i == n) return 1;
            if(i in cache) return cache[i];
            if (s[i] === '0') return 0;

            let count = DFS(i + 1);

            if (i + 1 < n) {
                const doubleNum = parseInt(s.slice(i, i + 2));
                if (doubleNum >= 10 && doubleNum <= 26) {
                    count += DFS(i + 2);
                }
            }

            cache[i] = count;

            return cache[i]
        }

        return DFS(0);    
    }
}
