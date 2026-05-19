class Solution {
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += '#' + str.length + '#' + str;
        }
        return encoded;
    }

    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            if (str[i] === '#') {
                let j = i + 1;
                let num = "";

                // read number
                while (j < str.length && str[j] !== '#') {
                    num += str[j];
                    j++;
                }

                const length = parseInt(num);
                const word = str.slice(j + 1, j + 1 + length);

                res.push(word);

                // move i past the whole block
                i = j + 1 + length;
            }
        }

        return res;
    }
}