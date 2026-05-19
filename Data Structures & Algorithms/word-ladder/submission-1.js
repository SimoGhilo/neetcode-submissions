class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    checkWords(word1,word2){
        let i = 0;
        const n = word1.length;
        let mismatches = 0;

        while(i < n){
            if(word1[i] != word2[i]){
                mismatches++;
            }
            i++;
        }
        return mismatches;
    }

    ladderLength(beginWord, endWord, wordList) {
        //AdjacencyList word => [words with 1 char diff]
        // BFS on adjacency List, set seen, track edges
        const adjacencyList = new Map();
        for(let i = 0; i < wordList.length; i++){
            for(let j = 0; j < wordList.length; j++){
                if(i == j) continue;
                if(this.checkWords(wordList[i],wordList[j]) <= 1){
                    if(!adjacencyList.has(wordList[i])){
                        adjacencyList.set(wordList[i], [wordList[j]])
                    } else {
                        adjacencyList.get(wordList[i]).push(wordList[j]);
                    }
                }
            }
        }
        
        for(let i = 0; i < wordList.length; i++){
            if(this.checkWords(wordList[i],beginWord) <= 1){
                if(!adjacencyList.has(beginWord)){
                    adjacencyList.set(beginWord, [wordList[i]])
                } else {
                    adjacencyList.get(beginWord).push(wordList[i]);
                }
            }
        }
        console.log(adjacencyList)
        
        const queue = [[beginWord,0]]; // currWord, steps
        const visited = new Set();
        let minSteps = Infinity;

        while(queue.length > 0){
            const size = queue.length;
            for(let k = 0; k < size; k++){
                const [currWord, steps] = queue.shift();
                if(currWord == endWord){
                    minSteps = Math.min(steps + 1,minSteps);
                }
                //Explore other words and enque them
                for(const nei of adjacencyList.get(currWord) || []){
                    if(!visited.has(nei)){
                        visited.add(nei);
                        queue.push([nei,steps+1]);
                    }
                }
            }
        }
        const ret = minSteps == Infinity ? 0 : minSteps;
        return ret;
    }
}
