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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) {
            return root;
        }
        let anchor = root;
        let queue = [root];
        while (queue.length !== 0) {
            let node = queue.shift();
            if (node) {
                let temp = node.left;
                node.left = node.right;
                node.right = temp;
                queue.push(node.right);
                queue.push(node.left);
            } else {
                continue;
            }
        }
        return anchor;
    }
}
