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
    reverseList(head) {
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

    reorderList(head) {
        let fast = head;
        let slow = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let reversedHead = this.reverseList(slow.next);
        slow.next = null;

        let merged = new ListNode();
        let dummy = merged;

        let curr = head;
        let currRev = reversedHead;

        while(curr || currRev){
            if(curr){
                dummy.next = curr;
                dummy = dummy.next;
                curr = curr.next;
            }
            if(currRev){
                dummy.next = currRev;
                dummy = dummy.next;
                currRev = currRev.next;
            }
            
        }

        return merged.next;
    }
}
