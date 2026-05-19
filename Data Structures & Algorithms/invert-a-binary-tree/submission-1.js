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
    dfs(node){
        if(!node) return;

        // if(node.left && node.right){
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
        // }

        if(node.left){
            this.dfs(node.left);
        }
        if(node.right){
            this.dfs(node.right);
        }
    }

    invertTree(root) {

        this.dfs(root);
        // this.dfs(root.left);
        // this.dfs(root.right);

        return root;
    }
}
