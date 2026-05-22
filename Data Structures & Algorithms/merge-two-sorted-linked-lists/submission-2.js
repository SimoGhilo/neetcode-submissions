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
        
        if(!list1) return list2;
        if(!list2) return list1;

        let dummy = new ListNode(null);
        let newHead = list1.val < list2.val ? list1 : list2;
        let curr1 = list1;
        let curr2 = list2;

        while(curr1 && curr2){
            if(curr1.val < curr2.val){
                dummy.next = curr1
                curr1 = curr1.next;
            } else {
                dummy.next = curr2
                curr2 = curr2.next;
            }
            dummy = dummy.next;
        }

        while(curr1){
            dummy.next = curr1
            curr1 = curr1.next;
            dummy = dummy.next;
        }
        while(curr2){
            dummy.next = curr2
            curr2 = curr2.next;
            dummy = dummy.next;
        }
        return newHead;        
    }
}
