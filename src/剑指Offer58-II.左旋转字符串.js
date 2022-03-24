
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = function (s, n) {
    // 不申请额外空间，只在本字符串上操作

    // 思路
    // 将n以后的元素加到字符串前面
    // 再截取原来字符长度，即可
    const len = s.length
    let i = 0
    while (i < len - n) {
        s = s[len - 1] + s
        i++
    }
    return s.slice(0, len)
}
