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
        let merged = new ListNode();
        let dummy = merged;

        let curr1 = list1;
        let curr2 = list2;

        while(curr1 && curr2){
            if(curr1.val < curr2.val){
                dummy.next = new ListNode(curr1.val);
                curr1 = curr1.next;
            } else {
                dummy.next = new ListNode(curr2.val);
                curr2 = curr2.next;  
            }
            dummy = dummy.next
        }

        while(curr1){
            dummy.next = new ListNode(curr1.val);
            curr1 = curr1.next;
            dummy = dummy.next;     
        }

        while(curr2){
            dummy.next = new ListNode(curr2.val);
            curr2 = curr2.next;
            dummy = dummy.next;     
        }

        return merged.next;
    }
}
