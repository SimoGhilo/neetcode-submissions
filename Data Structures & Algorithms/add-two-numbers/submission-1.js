class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let curr1 = l1;
        let curr2 = l2;
        let carry = 0;

        let newList = new ListNode();
        let pointer = newList;

        while (curr1 || curr2) {
            // Get the values from the current nodes and add carry
            let val1 = curr1 ? curr1.val : 0;
            let val2 = curr2 ? curr2.val : 0;
            let sum = val1 + val2 + carry;

            // Update the carry and store the current node value
            if (sum >= 10) {
                carry = 1;
                sum = sum % 10;
            } else {
                carry = 0;
            }

            let newNode = new ListNode(sum);
            pointer.next = newNode;

            // Move pointers forward
            if (curr1) curr1 = curr1.next;
            if (curr2) curr2 = curr2.next;
            pointer = pointer.next;
        // If there's a carry left after the last addition, add an extra node
        if (carry > 0) {
            pointer.next = new ListNode(carry);
        }
        
        }



        return newList.next;
    }
}
