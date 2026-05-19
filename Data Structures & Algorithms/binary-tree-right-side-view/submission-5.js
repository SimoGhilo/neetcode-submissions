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
     * @return {number[]}
     */
    rightSideView(root) {
        let values = [];
        if(!root) return []
        let queue = [root];

        while(queue.length > 0){
            let size = queue.length;
            let level = []
            for(let o = 0; o < size; o++){
                let processed = queue.shift();
                level.push(processed.val);
                if(processed.left){
                    queue.push(processed.left);
                }
                if(processed.right){
                    queue.push(processed.right);
                }
            }
            values.push(level[level.length -1])
        }

        return values;
    }
}
