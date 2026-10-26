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
        let maxSum = root.val;
        function DFS(node){
            if(!node) return 0;
            const left = DFS(node.left);
            const right = DFS(node.right);
            const ms = Math.max(left + node.val,right + node.val,node.val,0);
            maxSum = Math.max(maxSum,left + right + node.val);
            return ms;
        }
        DFS(root);
        return maxSum;
    }
}
