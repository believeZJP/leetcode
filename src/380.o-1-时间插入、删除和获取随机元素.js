/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
    this.map = new Map()
    this.values = []
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false
    }
    this.map.set(val, this.values.length)
    this.values.push(val)
    return true
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) {
        return false
    }
    const index = this.map.get(val)
    // 存在且为最后一个元素
    if (index === this.values.length - 1) {
        this.values.pop()
        this.map.delete(val)
    } else {
        // 存在，但不为最后一个元素
        const lastValue = this.values.pop()
        this.values[index] = lastValue
        this.map.set(lastValue, index)
        this.map.delete(val)
    }
    return true
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const random = parseInt(Math.random() * this.values.length)
    return this.values[random]
}

/*
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
*/
// @lc code=end
