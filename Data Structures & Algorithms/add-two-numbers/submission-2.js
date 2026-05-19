class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let joined = dummy;

        let curr1 = l1;
        let curr2 = l2;
        let carry = 0;

        while (curr1 || curr2) {
            let val1 = curr1 ? curr1.val : 0;
            let val2 = curr2 ? curr2.val : 0;

            let sum = val1 + val2 + carry;
            carry = Math.floor(sum / 10);

            joined.next = new ListNode(sum % 10);
            joined = joined.next;

            if (curr1) curr1 = curr1.next;
            if (curr2) curr2 = curr2.next;
        }

        if (carry > 0) {
            joined.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
