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
        if(!root) return [];
        
        let levels = [];

        let queue = [root];

        while(queue.length > 0){
            let level = [];
            let queueSize = queue.length;

            for(let i = 0; i < queueSize; i++){
                let processed = queue.shift();

                level.push(processed.val);

                if(processed.left){
                    queue.push(processed.left);
                }
                if(processed.right){
                    queue.push(processed.right);
                }
            }

            levels.push(level);
        }

        return levels;
    }
}
