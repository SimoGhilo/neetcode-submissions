// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
    if (!head) return null;
    
    let map = new Map();
    let curr = head;

    // First pass: create all nodes and store in map
    while (curr) {
        map.set(curr, new Node(curr.val)); // Use `curr` as the key and a new node as the value
        curr = curr.next;
    }

    // Second pass: set up `next` and `random` pointers
    curr = head;
    while (curr) {
        map.get(curr).next = curr.next ? map.get(curr.next) : null;   // Connect next pointer
        map.get(curr).random = curr.random ? map.get(curr.random) : null; // Connect random pointer
        curr = curr.next;
    }

    // Return the copied head
    return map.get(head);
}
}
