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
    dfs(node, diameter) {
        if (!node) return 0;

        let left = this.dfs(node.left, diameter);
        let right = this.dfs(node.right, diameter);

        // Update the diameter with the maximum path length at this node
        diameter.diameter = Math.max(diameter.diameter, left + right);

        // Return the height of the current node
        return 1 + Math.max(left, right);
    }

    diameterOfBinaryTree(root) {
        let diameter = { diameter: 0 };
        
        this.dfs(root, diameter);

        return diameter.diameter;
    }
}
