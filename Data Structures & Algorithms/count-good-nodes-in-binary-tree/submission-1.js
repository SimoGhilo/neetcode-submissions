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
    goodNodes(root) {

        let res = [];

        function DFS(node,maxSeen){
            if(!node) return;

            if(node.val >= maxSeen){
                res.push(node.val);
                maxSeen = Math.max(maxSeen,node.val)
            }

            DFS(node.left,maxSeen);
            DFS(node.right,maxSeen);
        }

        DFS(root, - Infinity);
        console.log(res)
        return res.length;
    }
}
