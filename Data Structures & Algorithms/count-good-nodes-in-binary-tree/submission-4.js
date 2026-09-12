/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        const good = [0];

        function DFS(node,max){
            if(!node) return;
            if(node.val >= max){
                good[0] = good[0] + 1;
                max = node.val;
            }
            DFS(node.left,max);
            DFS(node.right,max);
        }

        DFS(root,- Infinity);
        return good[0]
    }
}
