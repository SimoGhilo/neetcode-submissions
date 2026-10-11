class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> Integer.compare(b[0], a[0]));
        ArrayList<Integer> solution = new ArrayList<>();
        int n = nums.length;
        //Get first window and add first max
        for(int i = 0; i < k; i++){
            maxHeap.offer(new int[]{nums[i], i});
        }
        solution.add(maxHeap.peek()[0]);
        for(int i = k; i < n; i++){
            //add valid element to queue and push to solution the max if idx > i - k
            maxHeap.offer(new int[]{nums[i], i});
            int idxTop = maxHeap.peek()[1];
            //Remove max elements that are no longer in window
            while(idxTop < (i - k + 1)){
                maxHeap.poll();
                idxTop = maxHeap.peek()[1];
            }
            solution.add(maxHeap.peek()[0]);
        }
        return solution.stream().mapToInt(Integer::intValue).toArray();
    }
}
