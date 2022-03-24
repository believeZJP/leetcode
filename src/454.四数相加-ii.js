/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
const fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map = new Map()
    // 先循环nums1和nums2，将两数之和存到map中，和为key,val为出现和的次数
    nums1.forEach(i => {
        nums2.forEach(j => {
            map.set(i + j, (map.get(i + j) || 0) + 1)
        })
    })

    let count = 0
    for (const m of nums3) {
        for (const n of nums4) {
            // 这里不能用if来判断，因为有和为0的情况
            // if (map.get(0 - m - n)) {
            //     count++
            // }
            count += map.get(0 - m - n) || 0
        }
    }
    return count
}
fourSumCount([1, 2],
    [-2, -1],
    [-1, 2],
    [0, 2])
// @lc code=end
