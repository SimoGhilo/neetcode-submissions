class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  // Compare counts at index 1
  compare(i1, i2) {
    return this.heap[i1][1] > this.heap[i2][1];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)][1] < this.heap[index][1]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return max;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] > this.heap[largerChildIndex][1]
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (this.heap[index][1] >= this.heap[largerChildIndex][1]) break;

      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  print() {
    console.log(this.heap);
  }
}




class Twitter {
    users;
    count;

    constructor() {
        this.users = {};
        this.count = 0; // user id => { tweets : [[tweetId, timestamp]],
                        //              follows: [userId..] followerId => followeeId  }
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!(userId in this.users)){
            this.users[userId] = {tweets:[], follows: []}
        }
        this.users[userId]['tweets'].push([tweetId,this.count]);
        this.count++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let allTweets = [];
        if (!(userId in this.users)) {
            this.users[userId] = { tweets: [], follows: [] };
        }
        let followed = this.users[userId]['follows']

        for(const f of followed){
            if (!(f in this.users)) continue;
            let tweets = this.users[f]['tweets'];
            for(const t of tweets){
                allTweets.push(t);
            }
        }

        let userTweets = this.users[userId]['tweets'];
        for(const t of userTweets){
            if(allTweets.includes(t)) continue;
            allTweets.push(t);
        }
        

        let maxHeap = new MaxHeap();

        for(const t of allTweets){
            maxHeap.insert(t);
        }

        let result = [];

        for(let i = 0; i < 10; i++){
            let max = maxHeap.extractMax();
            if(max == undefined) break;
            result.push(max[0]);
        }

        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.users[followerId]){
            this.users[followerId] = {tweets:[], follows: []}
        }
        if (!this.users[followerId]['follows'].includes(followeeId)) {
            this.users[followerId]['follows'].push(followeeId);
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(!this.users[followerId]) return;
        let followed = this.users[followerId]['follows'];
        for(let i = 0; i < followed.length; i++){
            let f = followed[i]
            if(f == followeeId){
                followed.splice(i,1);
                i--; // adjust index
            }
        }
    }
}
