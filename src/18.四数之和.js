/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    // 这里用两层循环加双指针来解决

    const len = nums.length
    if (len < 4) {
        return []
    }

    // 先对数组排序
    nums.sort((a, b) => a - b)

    const res = []

    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        for (let j = i + 1; j < len - 2; j++) {
            // 注意这里是i+1
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            // 定义双指针
            let left = j + 1
            let right = len - 1

            // 当左指针小于右指针时
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                // 和大于0，右指针向左移
                if (sum > target) {
                    right--
                    continue
                }
                // 小于0，左指针向右移
                if (sum < target) {
                    left++
                    continue
                }
                // 等于target则符合条件,放入结果集
                res.push([nums[i], nums[j], nums[left], nums[right]])

                // 去重
                while (left < right && nums[left] === nums[++left]) {
                    // 当前left和下一个相同时，left自增
                }
                while (left < right && nums[right] === nums[--right]) {
                    // 当前right和下一个相同时，right自减
                }
            }
        }
    }

    return res
}

// fourSum([1, 0, -1, 0, -2, 2], 0)
// fourSum([2, 2, 2, 2, 2], 0)
// @lc code=end
