/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const leftSearch = function (nums, target) {
    let low = 0
    let high = nums.length - 1
    let mid
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (nums[mid] < target) {
            low = mid + 1
        } else if (nums[mid] > target) {
            high = mid - 1
        } else if (nums[mid] === target) {
            // 这里不返回，继续收缩左边界
            high = mid - 1
        }
    }

    // 最后检查，low是否越界或者是命中
    if (low >= nums.length || nums[low] !== target) {
        return -1
    }
    return low
}

const rightSearch = function (nums, target) {
    let low = 0
    let high = nums.length - 1
    let mid

    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (nums[mid] < target) {
            low = mid + 1
        } else if (nums[mid] > target) {
            high = mid - 1
        } else if (nums[mid] === target) {
            // 这里不返回，继续收缩右边界
            low = mid + 1
        }
    }

    // 最后检查high，是否命中或越界
    if (high < 0 || nums[high] !== target) {
        return -1
    }
    return high
}

const searchRange = function (nums, target) {
    return [leftSearch(nums, target), rightSearch(nums, target)]
}

// 复杂度分析：

// 时间复杂度：O(logn)
// 空间复杂度：O(1)
// @lc code=end
