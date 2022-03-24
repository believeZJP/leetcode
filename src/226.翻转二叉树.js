/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
const invertTree = function (root) {
    // 特殊情况
    if (root === null) {
        return null
    }
    // 前序遍历位置
    // 交换左右节点
    [root.left, root.right] = [root.right, root.left]

    // 左右节点继续翻转它们的子节点
    invertTree(root.left)
    invertTree(root.right)

    return root
}
// @lc code=end
