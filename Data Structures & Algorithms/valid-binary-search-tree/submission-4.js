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
    isValidBST(root) {

        function DFS(node,min,max){
            if(!node) return true;

            if(min != null && node.val <= min) return false;
            if(max != null && node.val >= max) return false;

            return DFS(node.left,min,node.val) && DFS(node.right,node.val,max);
        }

        return DFS(root,null,null);
    }
}
