class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        for(int n : nums){
            maxHeap.add(n);
        }

        int i = 1;
        while(i < k){
            maxHeap.poll();
            i+=1;
        }

        return maxHeap.peek();
    }
}
