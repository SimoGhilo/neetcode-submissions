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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        function sameTree(nodeA,nodeB){

        if(!nodeA && !nodeB) return true;
        if(nodeA && !nodeB) return false;
        if(!nodeA && nodeB) return false;
        if(nodeA.val != nodeB.val) return false;
        return sameTree(nodeA.left,nodeB.left) && sameTree(nodeA.right,nodeB.right);

        }

        let flag = false;
        
        function DFS(node){
            if(!node) return;

            if(node.val == subRoot.val){
                if(sameTree(node,subRoot)){
                    flag = true;
                    return;
                }
            }
            DFS(node.left);
            DFS(node.right);
        }

        DFS(root);
        return flag;
    }

}
