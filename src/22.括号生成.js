/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 回溯，死抓3个要点
// 1. 选择。这里只有两个选择，左括号或有括号。用DFS遍历这棵树，找出所有解，叫回溯。
// 2. 约束条件。 什么情况选左括号，什么情况选有括号。利用约束去掉不合理的解。
// 3. 目标。构建出n对合法的括号。 长度到达2*n即可结束递归。
const generateParenthesis = function (n) {
    const res = []

    // 左右剩余的括号数，当前字符串
    const dfs = (left, right, str) => {
        // 字符串的长度等于2n
        if (str.length === 2 * n) {
            // 加入结果
            res.push(str)
            // 结束
            return
        }
        // 只要有左括号，就先用左括号，然后继续选择递归
        if (left > 0) {
            dfs(left - 1, right, str + '(')
        }
        // 右括号比左括号多才能选择左括号，继续选择递归
        if (left < right) {
            dfs(left, right - 1, str + ')')
        }
    }

    // 递归入口
    dfs(n, n, '')
    return res
}
generateParenthesis('3')
// @lc code=end
