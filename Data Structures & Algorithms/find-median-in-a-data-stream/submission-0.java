class MedianFinder {
    /* Define two heaps:
        this.maxHeap for small part
        this.minHeap for big part

        add to small heap by default
        check if length diff is not > 1
        The heap with the longest length will need
        to take either the max or min element and push
        it to the other heap
        check if max Element of this.maxHeap
        is less than min element of min Heap,
        if not bring max Element oif small to
        large (from this.maxHeap to this.minHeap)

        if length is even take min and max elements
        and add them together and divide by two.
        
    */
    PriorityQueue<Integer> minHeap;
    PriorityQueue<Integer> maxHeap;

    public MedianFinder() {
        this.minHeap = new PriorityQueue<>(); 
        this.maxHeap = new PriorityQueue<>(Collections.reverseOrder());     
    }
    
    public void addNum(int num) {
        this.maxHeap.add(num);

        // Check and rebalance between heaps if needed
        Integer biggestOfSmall = this.maxHeap.peek();
        Integer smallestOfBig = this.minHeap.peek();

        while (biggestOfSmall != null && smallestOfBig != null
         && biggestOfSmall > smallestOfBig) {
            this.maxHeap.poll();
            this.minHeap.poll();
            this.minHeap.add(biggestOfSmall);
            this.maxHeap.add(smallestOfBig);

            biggestOfSmall = this.maxHeap.peek();
            smallestOfBig = this.minHeap.peek();
        }

        // Balance heap sizes
        int sizeSmall = this.maxHeap.size();
        int sizeBig = this.minHeap.size();
        int diff = Math.abs(sizeSmall - sizeBig);

        while (diff > 1) {
            if (sizeSmall > sizeBig) {
                this.minHeap.add(this.maxHeap.poll());
            } else {
                this.maxHeap.add(this.minHeap.poll());
            }

            sizeSmall = this.maxHeap.size();
            sizeBig = this.minHeap.size();
            diff = Math.abs(sizeSmall - sizeBig);
        }
    }

    
    public double findMedian() {
        int sizeSmall = this.maxHeap.size();
        int sizeBig = this.minHeap.size();
        if(sizeBig == sizeSmall){
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
        } else {
            return this.maxHeap.peek();
        }
    }
}
