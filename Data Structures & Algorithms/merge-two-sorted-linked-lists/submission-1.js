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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let merged = new ListNode(0);
        let dummyHead = merged;

        let curr1 = list1;
        let curr2 = list2;

        while(curr1 && curr2){
            if(curr1.val < curr2.val){
                merged.next = curr1;
                curr1 = curr1.next;
            } else {
                merged.next = curr2;
                curr2 = curr2.next;
            }
            merged = merged.next;
        }

        while(curr1){
            merged.next = curr1;
            curr1 = curr1.next;
            merged = merged.next;
        }
        while(curr2){
            merged.next = curr2;
            curr2 = curr2.next;
            merged = merged.next;
        }
        return dummyHead.next;
    }
}
