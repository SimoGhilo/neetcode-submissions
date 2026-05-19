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
        let lca = [root];

        function DFS(node){
            if(!node) return;
            if(node.val == p.val || node.val == q.val){
                lca[0] = node;
                return;
            }
            if(node.val > p.val && node.val > q.val){
                DFS(node.left)
            } else if(node.val < p.val && node.val < q.val){
                DFS(node.right)
            } else {
                lca[0] = node;
                return;
            }

        }

        DFS(root);
        return lca[0];
    }
}



