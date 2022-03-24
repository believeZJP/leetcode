/**
 *
485. 最大连续 1 的个数

给定一个二进制数组， 计算其中最大连续 1 的个数。

示例：

输入：[1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

提示：

输入的数组只包含 0 和 1 。
输入数组的长度是正整数，且不超过 10,000。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    if (!nums || nums.length === 0) {
        return 0
    }
    let count = 0
    let result = 0
    for (let i = 0, il = nums.length; i < il; i++) {
        if (nums[i] === 1) {
            count++
        } else {
            result = Math.max(count, result)
            count = 0
        }
    }
    return Math.max(count, result)
}

/**
 * 解题思路：
 * 如果长度为0，直接返回0
 *
 * 定义两个变量，count统计每次遇到0之前有几个1，result存储遍历的最大值
 *
 * 循环整个数组
 *
 * 如果当前值为1，count加1，
 *
 * 如果不是，把result改为result和count的最大值
 *
 * 遍历结束，返回result和count的最大值
 */
