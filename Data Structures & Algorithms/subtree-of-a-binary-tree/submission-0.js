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

        if(!subRoot) return true;
        if(!root) return false;

        function sameTree(nodeA,nodeB){
            if(!nodeA && !nodeB) return true;
            if(!nodeA && nodeB) return false;
            if(nodeA && !nodeB) return false;
            if(nodeA.val != nodeB.val) return false;

            return sameTree(nodeA.left,nodeB.left) && sameTree(nodeA.right,nodeB.right)
        }

        function DFS(node) {
            if (!node) return false; // Base case: if the current node is null, return false
            
            // Check if the current node's subtree matches subRoot
            if (node.val === subRoot.val && sameTree(node, subRoot)) {
                return true;
            }
            
            // Recursively search left and right subtrees
            return DFS(node.left) || DFS(node.right);
        }

        return DFS(root);


    }
}
