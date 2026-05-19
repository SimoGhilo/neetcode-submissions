class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const m = heights.length;
        const n = heights[0].length;

        const pacSet = new Set();
        const atlSet = new Set();

        let directions = [[0,1], [0,-1], [1,0], [-1,0]];

        function DFS(currI,currJ,setOcean){

            let currHeight = heights[currI][currJ];

            for(const [di,dj] of directions){
                const newI = di + currI;
                const newJ = dj + currJ;

                if(newI >= 0 && newJ >= 0 
                && newI < m && newJ < n
                && !setOcean.has(`${newI}-${newJ}`)){
                    const newHeight = heights[newI][newJ];
                    if(newHeight >= currHeight){
                        setOcean.add(`${newI}-${newJ}`);
                        DFS(newI,newJ,setOcean)
                    }
                }
                
            }
        }

        //Pacific
        for(let i = 0; i < m; i++){
            pacSet.add(`${i}-0`);
            DFS(i,0,pacSet);
        }

        for(let j = 0; j < n; j++){
            pacSet.add(`0-${j}`);
            DFS(0,j,pacSet);
        }

        //Atlantic
        for(let i = 0; i < m; i++){
            atlSet.add(`${i}-${n - 1}`);
            DFS(i,n - 1,atlSet);
        }

        for(let j = 0; j < n; j++){
            atlSet.add(`${m - 1}-${j}`);
            DFS(m - 1, j, atlSet);
        }

        const result = [];

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(pacSet.has(`${i}-${j}`)
                   && atlSet.has(`${i}-${j}`)){
                    result.push([i,j]);
                   }
            }
        }

        return result;
    }
}
