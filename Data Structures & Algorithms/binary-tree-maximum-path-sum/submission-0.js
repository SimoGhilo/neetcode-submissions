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

        let maxSumPath = - Infinity;
        
        function DFS(node, ){
            if(! node) return 0;
            
            let leftSum = Math.max(0, DFS(node.left));  
            let rightSum = Math.max(0, DFS(node.right));

            // Calculate the possible path sum that goes through this node
            let currPathSum = node.val + leftSum + rightSum;

            // Update maxSumPath if the current path sum is larger
            maxSumPath = Math.max(maxSumPath, currPathSum);

            // Return the maximum path sum starting from this node, either going left or right
            return node.val + Math.max(leftSum, rightSum);
        }

        DFS(root);

        return maxSumPath;
    }
}
