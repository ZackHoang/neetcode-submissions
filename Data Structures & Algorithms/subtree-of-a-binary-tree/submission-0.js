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

function sameTree(root1, root2) {
    if (!root1 && !root2) {
        return true;
    }
    if (root1 && root2 && root1.val === root2.val) {
        return (sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right));
    }
    return false;
}

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (subRoot === null) {
            return true;
        }
        if (root === null) {
            return false;
        }
        if (sameTree(root, subRoot)) {
            return true;
        }
        return (this.isSubtree(root.left, subRoot) ||
        this.isSubtree(root.right, subRoot)); 
    }
}
