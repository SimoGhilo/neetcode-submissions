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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        function DFS(nodeA,nodeB){
            if(!nodeA && !nodeB) return true;
            if(!nodeA && nodeB) return false;
            if(nodeA && !nodeB) return false;

            if(nodeA.val != nodeB.val) return false;

            return DFS(nodeA.left,nodeB.left) && DFS(nodeA.right,nodeB.right);
        }

        return DFS(p,q)
    }
}
