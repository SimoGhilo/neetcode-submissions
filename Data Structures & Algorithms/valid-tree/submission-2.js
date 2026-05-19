class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false;
        }
        // Edge case: If there's only one node, it's trivially a valid tree
        if (n === 1) return true;

        let map = new Map();

        // Building the adjacency list (add both directions of each edge)
        for (const edge of edges) {
            if (!map.has(edge[0])) {
                map.set(edge[0], []);
            }
            if (!map.has(edge[1])) {
                map.set(edge[1], []);
            }
            map.get(edge[0]).push(edge[1]);
            map.get(edge[1]).push(edge[0]);
        }

        // DFS function to check for cycles and visited nodes
        var dfs = (currN, visited, parent) => {
            if (visited.has(currN)) return false; // Cycle detected

            visited.add(currN); // Mark the current node as visited

            let neighb = map.get(currN); // Get neighbors of current node
            for (const ne of neighb) {
                // Skip the parent node to avoid false cycle detection
                if (ne === parent) continue;
                
                if (!dfs(ne, visited, currN)) {
                    return false; // If a cycle is found, return false
                }
            }
            return true;
        }

        // Set to track visited nodes
        let visited = new Set();

        // Start DFS from node 0
        if (!dfs(0, visited, -1)) return false;

        // Check if all nodes were visited (no disconnected components)
        return visited.size === n;
    }
}
