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
        let array = [];

        for(const list of lists){
            let curr = list;
            while(curr){
                array.push(curr.val)
                curr = curr.next;
            }
        }
        array.sort((a,b) => a - b);

        let dummy = new ListNode();
        let curr = dummy;
        for(const n of array){
            curr.next = new ListNode(n);
            curr = curr.next;
        }
        return dummy.next;
    }
}
