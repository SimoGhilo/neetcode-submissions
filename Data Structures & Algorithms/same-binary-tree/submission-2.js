class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        function DFS(currP,currQ){
            if(!currP && !currQ) return true;
            if(!currP || !currQ) return false;
            if(currP.val != currQ.val) return false;

            let result = DFS(currP.left,currQ.left) && DFS(currP.right,currQ.right);
            return result;
        }

        return DFS(p,q)
    }
}
