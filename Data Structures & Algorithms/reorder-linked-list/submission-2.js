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
    reorderList(head) {
        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse from slow.next
        let second = slow.next;
        slow.next = null;   // break the list

        let prev = null;
        let curr = second;

        while(curr){
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        let c2 = prev;
        let c1 = head;

        while(c1 && c2){
            const next1 = c1.next;
            const next2 = c2.next;
            c1.next = c2;
            c2.next = next1;
            c1 = next1;
            c2 = next2;
        }

        return head;
    }
}
