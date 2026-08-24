function dfs(node, currMax) {
    if (node === null) {
        return 0;
    }

    let count = 0;

    if (node.val >= currMax) {
        count = 1;
        currMax = node.val;
    }

    count += dfs(node.left, currMax);
    count += dfs(node.right, currMax);

    return count;
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        return dfs(root, root.val);
    }
}