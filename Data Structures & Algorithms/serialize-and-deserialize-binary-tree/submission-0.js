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
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {

        function DFS(node){
            if (!node) {
                return 'N;'; 
            }

            let result = node.val !== null ? node.val + ';' : 'N;';
            
            
            let left = DFS(node.left);
            let right = DFS(node.right);

            return result + left + right;
        }

        return DFS(root);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        
        let index = 0;
        let vals = data.split(';')

        function DFS(){
            if (index >= vals.length) return null;

            if (vals[index] === 'N') {
                index++; // Skip the 'N'
                return null;
            }

            // Create a new node with the value
            let root = new TreeNode(vals[index]);
            index += 1;

            // Recursively build left and right subtrees
            root.left = DFS();
            root.right = DFS();

            return root;
        }

        return DFS();
    }
}
