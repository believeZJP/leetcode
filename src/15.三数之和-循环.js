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
        if (nums[i] > 0) { break }
        // 这里是与之前的对比，而不是之后的，所以不能是i+1
        while (nums[i] === nums[i - 1]) {
            i++
        }
        // 第一个数
        const first = nums[i]
        // 去重
        for (let j = i + 1; j < len;) {
            // 第二个数
            const second = nums[j]
            // 第三个数
            const third = 0 - first - second
            if (map.has(third)) {
                result.push([first, third, second])
                map.set(second, j)
                j++
                while (nums[j] === nums[j - 1]) { j++ }
            } else {
                map.set(second, j)
                j++
            }
        }
        map.clear()
    }
    return result
}
// @lc code=end

// var nums = [-1,0,1,2,-1,-4];
// var nums = [-2,0,1,1,2];
// var nums = [0,0,0,0];
// console.log(threeSum(nums));
