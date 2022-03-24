/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    // 简单写法

    // return Array.from(s).sort().join() === Array.from(t).sort().join()
    // 时间复杂度：O(nlogn)，其中 n 为 s 的长度。排序的时间复杂度为 O(nlogn)，比较两个字符串是否相等时间复杂度为 O(n)，因此总体时间复杂度为O(nlogn+n)=O(nlogn)。
    // 空间复杂度：O(logn)。排序需要 O(logn) 的空间复杂度。

    // 用map实现
    // 如果两个长度不一致，直接返回false
    if (s.length !== t.length) {
        return false
    }
    // 如果用字节处理的话，就去charCode来存取
    const base = 'a'.charCodeAt()
    const map = {}
    // 先将一个单词的每个字母的数量存到map中
    for (const i of s) {
        map[i.charCodeAt() - base] = (map[i.charCodeAt() - base] || 0) + 1
    }
    for (const j of t) {
        if (map[j.charCodeAt() - base]) {
            // 如果有的话，就减一
            map[j.charCodeAt() - base]--
            // 这里要判断，如果为负数，就返回false
            if (map[j.charCodeAt() - base] < 0) {
                return false
            }
        } else {
            // map中没有对应的元素，直接返回false
            return false
        }
    }
    // 这里要返回true
    return true
}
// @lc code=end
