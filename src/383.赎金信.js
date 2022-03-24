/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }
    // 用数组和map都可以统计
    const map = new Map()
    // 将字符串中的字母都存到变量中
    for (const letter of magazine) {
        map.set(letter, (map.get(letter) || 0) + 1)
    }
    // 循环笔记的字母，如果有，就减一
    for (const i of ransomNote) {
        if (map.get(i)) {
            map.set(i, (map.get(i) || 0) - 1)
            // 如果减一后小于0，则说明不够，返回false
            if (map.get(i) < 0) {
                return false
            }
        } else {
            // 如果没找到，不匹配
            return false
        }
    }
    return true
}
canConstruct('aa', 'ab')
// @lc code=end
