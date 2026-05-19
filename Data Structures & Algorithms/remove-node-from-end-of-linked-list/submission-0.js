class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head); // Dummy node to handle head removal cases
        let left = dummy;
        let right = head;

        // Move `right` pointer `n` steps ahead
        while (n > 0 && right) {
            right = right.next;
            n--;
        }

        // Move both pointers until `right` reaches the end
        while (right) {
            left = left.next;
            right = right.next;
        }

        // Skip the target node
        left.next = left.next.next;

        // Return the updated list, accounting for possible head removal
        return dummy.next;
    }
}
