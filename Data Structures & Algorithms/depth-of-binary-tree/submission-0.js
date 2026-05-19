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
    dfs(node, levels){
        if(!node) return levels;

        let leftDepth = this.dfs(node.left, levels + 1);
        let rightDepth = this.dfs(node.right, levels + 1);

        return Math.max(leftDepth,rightDepth);

    }


    maxDepth(root) {
        return this.dfs(root,0);
    }
}
