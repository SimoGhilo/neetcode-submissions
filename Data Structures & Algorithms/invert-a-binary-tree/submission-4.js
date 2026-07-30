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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null;
        
        function DFS(node) {
            if(!node) return;

            const tmp = node.left;
            node.left = node.right;
            node.right = tmp;

            DFS(node.left)
            DFS(node.right)

            return node;
        }

        return DFS(root)
    }
}
