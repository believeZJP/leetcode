/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const map = new Map()
    const result = []
    const len = nums.length
    if (len < 3) {
        return result
    }
    // 先排序，以便去重
    nums.sort((a, b) => (a - b))
    // console.log(nums)
    for (let i = 0; i < len - 2; i++) {
        // 因为是正序排列，第一个大于0，之后不可能=0，直接退出
        if (nums[i] > 0) { break }
        // 这里是与之前的对比，而不是之后的，所以不能是i+1
        while (nums[i] === nums[i - 1]) {
            i++
        }
        // 第一个数
        const first = nums[i]
        let second = i + 1
        let last = len - 1
        while (second < last) {
            const sum = first + nums[second] + nums[last]
            if (!sum) {
                // sum 为0
                result.push([first, nums[second], nums[last]])
                while (second < last && nums[second] === nums[second + 1]) second++
                while (second < last && nums[last] === nums[last - 1]) last--
                second++
                last--
            } else if (sum > 0) {
                last--
            } else {
                second++
            }
        }
        map.clear()
    }
    return result
}
// @lc code=end

const nums = [-1, 0, 1, 2, -1, -4]
// var nums = [-2,0,1,1,2];
// var nums = [0,0,0,0];
console.log(threeSum(nums))
