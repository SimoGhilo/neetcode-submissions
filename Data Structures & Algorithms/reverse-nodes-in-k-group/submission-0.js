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
     * @param {number} k
     * @return {ListNode}
     */
    getKth(node,k){
        let i = 0;
        let curr = node;
        while(i < k && curr){
            curr = curr.next;
            i++;
        }
        return curr;
    }

    reverseKGroup(head, k) {
        let dummy = new ListNode(null, head);
        let groupPrev = dummy;

        while(true){
            let kth = this.getKth(groupPrev,k);
            if(!kth) break;

            let groupNext = kth.next;

            // Reverse group
            let curr = groupPrev.next;
            let prev = groupPrev;
            while(curr != groupNext){
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            //tmp holds old head
            const tmp = groupPrev.next;
            
            groupPrev.next = kth;

            tmp.next = groupNext;
            //update groupPrev
            groupPrev = tmp;
        }

        return dummy.next;
    }

}
