

class Solution {
    public int[][] kClosest(int[][] points, int k) {
        // Create a priority queue to store points based on distance from origin
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
            (a, b) -> {
                // Calculate Euclidean distances
                double distanceA = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
                double distanceB = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
                return Double.compare(distanceA, distanceB);
            }
        );

        // Add all points to the priority queue
        for (int[] point : points) {
            minHeap.offer(point);
        }

        // Extract the k closest points
        int[][] result = new int[k][2];
        for (int i = 0; i < k; i++) {
            result[i] = minHeap.poll();
        }

        return result;
    }
}
