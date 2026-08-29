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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        function isSame(a,b){
            if(!a && !b) return true;
            if(!a || !b) return false;
            if(a.val != b.val) return false;
            return isSame(a.left,b.left) && isSame(a.right,b.right);
        }

        function DFS(node){
            if(!node) return;
            if(node.val == subRoot.val) {
                if(isSame(node,subRoot)) return true;
            }
            const r = DFS(node.left,subRoot) || DFS(node.right,subRoot);
            if(r) return true;
            return false;

        }

        return DFS(root,subRoot)
    }
}
