/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    // 这里如果数组长度不是偶数，说明有括号不匹配，直接返回false
    if (s.length % 2 !== 0) {
        return false
    }
    // 将左括号，有括号存成map
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    // 定义一个栈
    const stack = []

    // 循环字符串
    for (const i of s) {
        // 如果map中能取到对应的右括号
        if (!map[i]) {
            // 就去看栈尾的元素和当前元素是否匹配
            if (map[stack[stack.length - 1]] !== i) {
                return false
            } else {
                // 匹配，则栈尾元素出栈
                stack.pop()
            }
        } else {
            // 拿不到说明是左括号，放入栈中
            stack.push(i)
        }
    }
    // 最终返回stack的长度，为0，则匹配
    return !stack.length
}
isValid('()')
// @lc code=end
