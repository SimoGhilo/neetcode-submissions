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

        function DFS(nodeP,nodeQ){
            if(!nodeP && !nodeQ) return true;

            if(nodeP && !nodeQ) return false;
            if(!nodeP && nodeQ) return false;
            if(nodeP.val != nodeQ.val) return false;

            let left = DFS(nodeP.left,nodeQ.left);
            let right = DFS(nodeP.right,nodeQ.right);

            return left && right;

        };

        return DFS(p,q);
    }
}
