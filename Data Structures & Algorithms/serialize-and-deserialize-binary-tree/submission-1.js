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

class Codec {

    // traverse(node,array){
    //     if(!node) return;
    //     if(node.left){
    //         this.traverse(node.left);
    //     }
    //     const value = node?.val || null;
    //     array.push(value);
    //     if(node.right){
    //         this.traverse(node.right);
    //     }
    //     return array;
    // }
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        // const array = [];
        // this.traverse(root,array);
        // return array.toString();
        return JSON.stringify(root);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        return JSON.parse(data);
    }
}
