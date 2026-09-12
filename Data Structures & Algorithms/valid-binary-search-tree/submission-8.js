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
        if(!root) return true;

        function DFS(node,min,max){
            if(!node) return true;
            if(node.val <= min || node.val >= max) return false;
            const left = DFS(node.left,min,node.val);
            const right = DFS(node.right, node.val,max);
            if(!left || !right) return false;
            return true;
        }

        return DFS(root, -Infinity, Infinity)
    }
}
