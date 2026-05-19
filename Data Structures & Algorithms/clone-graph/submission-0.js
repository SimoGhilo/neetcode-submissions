class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        
        const oldToNew = new Map();
        let seen = new Set();

        function DFS(n){
            if(!n) return
            if(seen.has(n)) return;

            seen.add(n);

            if(!oldToNew.has(n)){
                oldToNew.set(n,new Node(n.val))
            }

            for(const nei of n.neighbors || []){
                if(!seen.has(nei)){
                    DFS(nei)
                }
            }
        }

        DFS(node)
        
        for(const [old,newNode] of oldToNew){
            for(const oldNei of old.neighbors){
                let newNei = oldToNew.get(oldNei);
                newNode.neighbors.push(newNei);
            }
        }
        return oldToNew.get(node)
    }

}
