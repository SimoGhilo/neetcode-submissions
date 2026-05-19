class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let pre = prerequisites;

        // Create an adjacency list for the graph
        let graph = new Map();
        for (let [course, prerequisite] of pre) {
            if (!graph.has(course)) {
                graph.set(course, []);
            }
            graph.get(course).push(prerequisite);
        }

        // Set to track the visited courses during DFS
        let visited = new Set();

        var dfs = (course, cache) => {
            // If the course is already in the current DFS stack, we found a cycle
            if (cache.has(course)) return false;

            // If the course has been visited, return true as it has been fully processed
            if (visited.has(course)) return true;

            // Mark the course as being in progress in the current DFS path
            cache.add(course);

            // Recurse for all prerequisites of the course
            if (graph.has(course)) {
                for (let prerequisite of graph.get(course)) {
                    if (!dfs(prerequisite, cache)) {
                        return false; // If any prerequisite can't be completed, return false
                    }
                }
            }

            // Mark the course as fully processed and remove it from the current DFS stack
            visited.add(course);
            cache.delete(course);

            return true;
        };

        // Try to finish all courses
        for (let i = 0; i < numCourses; i++) {
            // If the course cannot be finished, return false
            if (!dfs(i, new Set())) return false;
        }

        return true;
    }
}
