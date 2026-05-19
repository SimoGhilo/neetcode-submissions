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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let result = [];

    function DFS(node, depth) {
        if (!node) return;

        // If this is the first time visiting this level, add the node's value
        if (result.length === depth) {
            result.push(node.val);
        }

        // Prioritize right subtree first
        DFS(node.right, depth + 1);
        DFS(node.left, depth + 1);
    }

        DFS(root,0);

        return result;
    }
}
