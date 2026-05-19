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
    maxDepth(root) {
        if(!root) return 0;
        let levels = [];

        let queue = [root];

        while(queue.length > 0){
            let size = queue.length;
            let level = []
            for(let j = 0; j < size; j++){
                let processed = queue.shift();
                level.push(processed);
                if(processed && processed.left){
                    queue.push(processed.left);
                }
                if(processed && processed.right){
                    queue.push(processed.right);
                }
            }
            levels.push(level);
        }
        return levels.length;

    }
}
