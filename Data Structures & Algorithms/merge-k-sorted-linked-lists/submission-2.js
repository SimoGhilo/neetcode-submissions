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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const values = [];

        for(let curr of lists){
            while(curr){
                if(curr){
                    values.push(curr?.val);
                    curr = curr?.next;
                }
            }
        }

        values.sort((a,b) => a - b);
        const dummy = new ListNode(null);
        let currM = dummy;

        for(const val of values){
            currM.next = new ListNode(val);
            currM = currM.next;
        }

        return dummy.next;

    }
}
