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
    reverse(head){
        let prev = null;
        let curr = head;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    removeNthFromEnd(head, n) {

        let dummy = new ListNode(0);
        dummy.next = head;
        let a = dummy;
        let b = dummy;
        
        let index = 0;
        while(index <= n){
            a = a.next;
            index++
        }

        while(a){
            a = a.next;
            b = b.next;
        }

        b.next = b.next.next;
        return dummy.next;
    }
}
