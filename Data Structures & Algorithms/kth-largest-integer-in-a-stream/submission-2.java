class KthLargest {

    PriorityQueue<Integer> minHeap;
    int k;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minHeap = new PriorityQueue<>();
        
        for (int i : nums){
            this.minHeap.add(i);
            if(this.minHeap.size() > k){
                this.minHeap.poll();
            }
        }
    }
    
    public int add(int val) {
        if(this.minHeap.size() < k){
            this.minHeap.add(val);
        } else {
            int top = this.minHeap.peek();
            if(top < val){
                this.minHeap.poll();
                this.minHeap.add(val);
            }
        }
        return this.minHeap.peek();
    }
}
