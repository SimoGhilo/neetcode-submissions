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
        let newList = new ListNode();
        let dummy = newList;

        let map = new Map();

        for(const list of lists){
            let curr = list;
            while(curr){
                if(!map.has(curr.val)){
                    map.set(curr.val, 1)
                } else {
                    map.set(curr.val, map.get(curr.val) + 1)
                }
                curr = curr.next;
            }
        }
        

         const sortedMap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));

        // console.log(sortedMap);

        // return new ListNode();

        for(const [key, val] of sortedMap){

            let i = val;
            while(i > 0){
                dummy.next = new ListNode(key)
                i--;
                dummy = dummy.next;
            }    
        }

        return newList.next;
    }
}
