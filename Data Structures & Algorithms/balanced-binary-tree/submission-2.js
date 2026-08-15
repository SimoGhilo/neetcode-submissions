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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;
        const balanced = [true];

        function DFS(node){
            if(!node) return 0;
            const left = DFS(node.left)
            const right = DFS(node.right)
            if(Math.abs(left - right) > 1) {
                balanced[0] = false;
            }
            return 1 + Math.max(left,right)
        }
        DFS(root);
        return balanced[0];
    }
}
