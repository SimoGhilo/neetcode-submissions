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

        let res = [];

        function DFS(node){
            if(!node) return;
            DFS(node.left)
            res.push(node.val)
            DFS(node.right)
        }
        DFS(root);
        console.log(res)
        return res[k - 1]
    }
}
