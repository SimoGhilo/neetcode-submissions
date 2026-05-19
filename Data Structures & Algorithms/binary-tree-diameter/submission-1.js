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
        let maxDiameter = 0;

        function DFS(node,height){
            if(!node) return 0;

            let leftHeight = DFS(node.left,height + 1);
            let rightHeight = DFS(node.right,height + 1);

            let diameter =  leftHeight + rightHeight;
            maxDiameter = Math.max(maxDiameter, diameter);

            return Math.max(leftHeight,rightHeight) + 1
        }

        DFS(root,0);
        return maxDiameter;
    }
}
