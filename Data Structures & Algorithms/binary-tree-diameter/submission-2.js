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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(!root) return 0;
        const diameter = [0];

        function DFS(node){
            if(!node) return 0;
            const d = DFS(node.left) + DFS(node.right);
            //return height
            diameter[0] = Math.max(diameter[0],d)
            return 1 + Math.max(DFS(node.left), DFS(node.right))
        }
        DFS(root);
        return diameter[0];
    }
}
