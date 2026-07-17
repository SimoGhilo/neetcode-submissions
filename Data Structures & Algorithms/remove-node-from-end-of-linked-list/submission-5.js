/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        
        const dummy = new ListNode(null);
        dummy.next = head;
        let first = head;

        let i = 0;
        while(i < n){
            first = first.next;
            i++
        }
        let second = dummy;
        while(first){
            second = second.next;
            first = first.next;
        }
        // second is the node before the one to be removed
        second.next = second.next.next
       
        return dummy.next;
        
    }
}
