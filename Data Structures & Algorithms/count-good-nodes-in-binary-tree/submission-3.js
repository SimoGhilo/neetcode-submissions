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
        let good = 0;

        function DFS(node,ancestors){
            if(!node) return;

            
            let flag = ancestors.every((a)=> a <= node.val)
            if(flag){
                good++;
            }
            ancestors.push(node.val);

            DFS(node.left,[...ancestors]);
            DFS(node.right,[...ancestors])

        }
        DFS(root,[]);
        return good;
    }
}
