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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let levels = [];
        
        function DFS(node,index){
            if(!node) return;
            if(!levels[index]){
                levels[index] = [];
            }
            levels[index].push(node.val);

            DFS(node.left,index+1);
            DFS(node.right,index+1);
        }

        DFS(root,0);
        return levels;
    }
}
