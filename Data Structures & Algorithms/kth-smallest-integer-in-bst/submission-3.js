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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        //Traverse in order left -> centre -> right
        const res = [];

        function DFS(node){
            if(!node) return;
            DFS(node.left);
            res.push(node.val)
            DFS(node.right);
        }
        DFS(root);
        return res[k - 1]

    }
}
