class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const minDistances = new Map(); // node => minWeight
        const seen = new Set();
        let totalCost = 0;

        // Start with node 0
        for (let i = 1; i < n; i++) {
            minDistances.set(i, Infinity);
        }
        let current = 0;

        while (seen.size < n) {
            seen.add(current);

            // Update min distances to all unvisited nodes
            for (let i = 0; i < n; i++) {
                if (!seen.has(i)) {
                    const dist = Math.abs(points[current][0] - points[i][0]) +
                                 Math.abs(points[current][1] - points[i][1]);
                    if (dist < (minDistances.get(i) || Infinity)) {
                        minDistances.set(i, dist);
                    }
                }
            }

            // Find next node with min cost
            let minNode = null;
            let minVal = Infinity;
            for (const [node, weight] of minDistances) {
                if (!seen.has(node) && weight < minVal) {
                    minVal = weight;
                    minNode = node;
                }
            }

            if (minNode !== null) {
                totalCost += minVal;
                current = minNode;
            }
        }

        return totalCost;
    }
}
