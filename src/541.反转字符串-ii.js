/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
    // 1. 每隔 2k 个字符的前 k 个字符进行反转
    // 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符

    const len = s.length
    s = s.split('')

    // 遍历字符串时，每次向前移动2k距离
    for (let i = 0; i < len; i += 2 * k) {
        let left = i - 1
        // 这里要对右区间判断，超过后的取数组长度
        let right = i + k > len ? len : i + k
        // 从
        while (++left < --right) {
            [s[left], s[right]] = [s[right], s[left]]
        }
    }
    return s.join('')
}
// @lc code=end
