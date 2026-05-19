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
        let isBalanced = true; 

        function DFS(node){
            if(!node) return 0;

            let left = DFS(node.left);
            let right = DFS(node.right);

            if(Math.abs(left - right) > 1){
                isBalanced = false;
                return;
            }

            return 1 + Math.max(left,right)
        }
        
        DFS(root);
        return isBalanced;

    }
}
