/* 
129. 求根节点到叶节点数字之和
给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。
叶节点 是指没有子节点的节点。

示例 1：
输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/* 深度优先遍历 */
var sumNumbers1 = function(root) {
    const dfs = (node, preSum) => {
        if (node === null) {
            return 0
        }
        const sum = preSum * 10 + root.val
        if (node.left === null && node.right === null) {
            return sum
        } else {
            return dfs(root.left, sum) + dfs(root.right, sum)
        }
    }
    return dfs(root, 0)
};


/* 广度优先遍历 */
var sumNumbers2 = function(root) {
    if (!root) {
        return 0
    }

    const nodeQ = [root]
    const numQ = [root.val]
    let res = 0
    while (nodeQ.length) {
        const node = nodeQ.shift()
        const num = numQ.shift()
        const left = node.left
        const right = node.right
        if (!left && !right) {
            res += num
        } else {
            if (left) {
                nodeQ.push(left)
                numQ.push(num * 10 + left.val)
            }
            if (right) {
                nodeQ.push(right)
                numQ.push(num * 10 + right.val)
            }
        }
    }
    return res
}