class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        for(int i : stones){
            maxHeap.add(i);
        }

        while(maxHeap.size() > 1){
            int one = maxHeap.poll();
            int two = maxHeap.poll();
            if(one == two){
                continue;
            }
            int newStone;
            if(one > two){
                newStone = one - two;
            } else {
                newStone = two - one;
            }
            maxHeap.add(newStone);
        }

        int ret = maxHeap.isEmpty() ? 0 : maxHeap.peek();
        return ret; 
    }
}
