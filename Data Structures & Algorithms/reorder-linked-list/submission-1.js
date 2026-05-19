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
     * @return {void}
     */
    reverse(head){
        let curr = head;
        let prev = null;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    reorderList(head) {
        let fast = head;
        let slow = head;

        while(fast.next && fast.next.next){
            fast = fast.next.next;
            slow = slow.next;
        }

        let reversedHalfHead = this.reverse(slow);
        let curr = head;
        let currRev = reversedHalfHead;
        let next = curr.next;
        let nextRev = currRev.next;

        while(curr && currRev){
            next = curr.next;
            nextRev = currRev.next;
            curr.next = currRev
            currRev.next = next;
            curr=next;
            currRev = nextRev;
        }

        
    }
}
