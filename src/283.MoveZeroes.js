/**
 * @file: file
 * @author: zhaojianpeng
 */

/**
 *
 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

 示例:

 输入: [0,1,0,3,12]
 输出: [1,3,12,0,0]
 说明:

 必须在原数组上操作，不能拷贝额外的数组。
 尽量减少操作次数。

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    // 定义一个变量，存储有多少个非0元素
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]
        if (element !== 0) {
            // 注意，这里是放到index位置
            nums[index] = element
            index++
        }
    }
    // 第二次循环，从非0的位置以后都补0
    for (let j = index; j < nums.length; j++) {
        nums[j] = 0
    }
}

/**
 *
思路：

1. 定义一个变量，初始值为0，存储有多少个非0元素

循环数组，

如果是0，忽略，
如果非0，将当前数组放入index索引位置，并且index++

循环完成，统计到有index个非零元素，

再次循环，从index到nums.length位置都放入0
 */
