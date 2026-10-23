
class Solution {
    buildTree(preorder, inorder) {
        const inorderMap = new Map();

        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        const build = (preLeft, preRight, inLeft, inRight) => {
            if (preLeft > preRight || inLeft > inRight) {
                return null;
            }

            const rootVal = preorder[preLeft];
            const root = new TreeNode(rootVal);

            const cut = inorderMap.get(rootVal);
            const leftSize = cut - inLeft;

            root.left = build(
                preLeft + 1,
                preLeft + leftSize,
                inLeft,
                cut - 1
            );

            root.right = build(
                preLeft + leftSize + 1,
                preRight,
                cut + 1,
                inRight
            );

            return root;
        };

        return build(0, preorder.length - 1, 0, inorder.length - 1);
    }
}
