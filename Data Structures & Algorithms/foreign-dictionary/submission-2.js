class Solution {
    foreignDictionary(words) {
        if (!Array.isArray(words) || words.length === 0) {
            throw new TypeError("Input must be a non-empty array of strings.");
        }

        const map = new Map();

        // Step 1: Initialize all unique characters
        for (let word of words) {
            if (typeof word !== "string") {
                throw new TypeError("All items in words must be strings.");
            }
            for (let char of word) {
                if (!map.has(char)) {
                    map.set(char, new Set());
                }
            }
        }

        // Step 2: Build adjacency list
        for (let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];

            if (!word1 || !word2) {
                return ""; // Invalid input
            }

            // Edge case: invalid prefix order
            if (word1.startsWith(word2) && word1.length > word2.length) {
                return ""; // Invalid input
            }

            for (let k = 0; k < Math.min(word1.length, word2.length); k++) {
                const c1 = word1[k], c2 = word2[k];
                if (c1 !== c2) {
                    map.get(c1).add(c2);
                    break;
                }
            }
        }

        // for(const [key,val] of map){
        //     console.log(key, '->', val);
        // }

        let output = "";
        const visited = new Set();
        const visiting = new Set();

        function DFS(node){
            if(visited.has(node)) return true;
            if(visiting.has(node)) return false;
            visiting.add(node)

            for(const nei of map.get(node) || []){
                if(!DFS(nei)) return false;
            }

            visiting.delete(node);
            visited.add(node);
            output += node;
            return true;
        }

        for(const [key,val] of map){
            if(!DFS(key)) return "";
        }

        return output.split("").reverse().join("");
    }
}
