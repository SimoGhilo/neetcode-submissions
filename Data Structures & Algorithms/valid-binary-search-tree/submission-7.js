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

        function DFS(node,max,min){
            if(!node) return true;
            console.log(node.val,max,min)
            if((max != null) && node.val >= max) return false;
            if((min != null) && node.val <= min) return false;

            return DFS(node.left,node.val,min) &&
            DFS(node.right,max,node.val);
        }

        return DFS(root,null,null)

    }
}
