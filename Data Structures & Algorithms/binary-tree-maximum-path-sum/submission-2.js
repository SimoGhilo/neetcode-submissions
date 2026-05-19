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
    maxPathSum(root) {
         let maxSum = -Infinity;

        function DFS(node,currSum){
            if(!node) return 0;

            let left = Math.max(0,DFS(node.left,currSum));
            let right = Math.max(0,DFS(node.right,currSum));

            maxSum = Math.max(maxSum, node.val + left + right);
            
            return node.val + Math.max(left, right);

        }

        DFS(root,0)
        return maxSum;
    }
}
