class Solution {
    addTwoNumbers(l1, l2) {
        const l3 = new ListNode(0);

        let c1 = l1;
        let c2 = l2;
        let c3 = l3;
        let carry = 0;

        while (c1 || c2 || carry) {
            const val1 = c1 ? c1.val : 0;
            const val2 = c2 ? c2.val : 0;

            const sum = val1 + val2 + carry;

            carry = Math.floor(sum / 10);
            const digit = sum % 10;

            c3.next = new ListNode(digit);
            c3 = c3.next;

            if (c1) c1 = c1.next;
            if (c2) c2 = c2.next;
        }

        return l3.next;
    }
}