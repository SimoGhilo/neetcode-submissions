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
     * @return {ListNode}
     */
    reverseList(head) {

        function reverse(curr) {
            // base case:
            // empty list OR last node
            if (!curr || !curr.next) {
                return curr;
            }

            // reverse the rest of the list
            const newHead = reverse(curr.next);

            // flip pointers
            curr.next.next = curr;
            curr.next = null;

            return newHead;
        }

        return reverse(head);
    }
}