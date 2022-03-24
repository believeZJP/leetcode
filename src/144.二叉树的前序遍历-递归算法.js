
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
    // 递归将根节点及左右子树的值push到结果数组即可
    // 遍历顺序，根，左，右
    const res = []
    function preOrder (root) {
        if (!root) {
            return
        }
        res.push(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
    preOrder(root)
    return res
}
// @lc code=end
