/* 
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，
这条路径上所有节点值相加等于目标和 targetSum 。

叶子节点 是指没有子节点的节点。
示例 1：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
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
 * @param {number} targetSum
 * @return {boolean}
 */

/* dfs */
 /* var hasPathSum = function(root, targetSum) {
    dfs = (node, sum) => {
        if (!node) {
            return false
        }
        if (!node.left && !node.right) {
            return sum === node.val
        }
        return dfs(node.left, sum - node.val) || dfs(node.right, sum - node.val)
    }
    return dfs(root, targetSum)
}; */

var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false
    }

    let res = false
    let nodeQ = [root]
    let sumQ = [root.val]
    while (nodeQ.length) {
        const node = nodeQ.shift()
        const num = sumQ.shift()
        const left = node.left
        const right = node.right
        if (!left && !right) {
            if (num === targetSum) {
                return true
            }
            continue
        }
        if (left) {
            nodeQ.push(left)
            sumQ.push(num + left.val)
        }
        if (right) {
            nodeQ.push(right)
            sumQ.push(num + right.val)
        }
    }
    return false
}

