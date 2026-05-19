class Solution {
    public int leastInterval(char[] tasks, int n) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        Queue<int[]> queue = new LinkedList<>();
        int time = 0;

        Map<Character, Integer> freq = new HashMap<>();

        for (char c : tasks) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            int value = entry.getValue();
            maxHeap.add(value);
        }

        while(!maxHeap.isEmpty() || !queue.isEmpty()){
            if (!queue.isEmpty() && queue.peek()[1] <= time) {
                int[] cooledTask = queue.poll();
                maxHeap.add(cooledTask[0]);
            }
            if (!maxHeap.isEmpty()) {
                int frequen = maxHeap.poll();
                if (frequen - 1 > 0) {
                    queue.add(new int[]{frequen - 1, time + n + 1}); // +1 because cooldown starts *after* this tick
                }
            }
            time++;
        }

        return time;
    }
}
