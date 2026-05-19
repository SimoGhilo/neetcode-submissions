class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs) {
        let encoded = "";
        for (const s of strs) {
            let len = s.length;
            encoded += len + "#" + s; // Encode length followed by "#" and then the string
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;
        
        while(i < str.length){
            let j = i;
            while(str[j] != '#'){
                j++
            }
            let length = parseInt(str.slice(i,j));
            let word = str.slice(j + 1, j + 1 + length);
            decoded.push(word);
            i = j + 1 + length
        }

        return decoded;
    }

}
