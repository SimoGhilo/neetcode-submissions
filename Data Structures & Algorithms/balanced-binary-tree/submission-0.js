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
     * @return {boolean}
     */

    isBalanced(root) {
        if(!root) return true;

        let flag = true;

        const DFS = (node) => {
            if(!node) return 0;

            let leftHeight = DFS(node.left);
            let rightHeight = DFS(node.right);

            if(Math.abs(leftHeight - rightHeight) > 1){
                flag = false;
            }

            return Math.max(leftHeight, rightHeight) + 1
        }

        DFS(root);

        return flag;

    }
}
