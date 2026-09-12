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
        if(!root) return[];
        const levels = [];
        const queue = [root];
        while(queue.length > 0){
            const size = queue.length;
            const level = [];
            for(let o = 0; o < size; o++){
                const processed = queue.shift();
                level.push(processed.val);
                if(processed.left) queue.push(processed.left);
                if(processed.right) queue.push(processed.right);
            }
            levels.push(level);
        }
        return levels.map((l) => l[l.length - 1]);   
    }
}
