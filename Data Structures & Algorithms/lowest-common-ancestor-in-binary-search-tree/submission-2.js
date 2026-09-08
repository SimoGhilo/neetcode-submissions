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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {

        function LCA(node) {
            if(p.val < node.val && q.val < node.val){
                return LCA(node.left)
            }
            if(p.val > node.val && q.val > node.val){
                return LCA(node.right);
            }
            return node
        }

        return LCA(root)

    }
}
