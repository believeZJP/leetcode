/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
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
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    // 这里用迭代算法解决
    if (root === null) {
        return []
    }
    // 初始化结果和栈
    const res = []
    const stack = []

    // 当前节点和栈不为空时，循环遍历
    while (root !== null || stack.length) {
        // 当前节点不为空，处理它的左子树
        while (root !== null) {
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        // 如果当前节点没有左子树，向上回溯处理父节点的右子树
        root = stack.pop().right
    }
    return res
}
// @lc code=end
