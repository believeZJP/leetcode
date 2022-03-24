/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    // 用双指针来解决
    let left = 0
    let right = s.length - 1
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
}
// @lc code=end
