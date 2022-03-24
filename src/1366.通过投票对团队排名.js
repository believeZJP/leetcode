/*
 * @lc app=leetcode.cn id=1366 lang=javascript
 *
 * [1366] 通过投票对团队排名
 */

// @lc code=start
/**
 * @param {string[]} votes
 * @return {string}
 */
const rankTeams = function (votes) {
    // 从第一个元素中取出单个投票的总票数
    const n = votes[0].length
    const ranks = {}

    // 循环票数
    votes.forEach(v => {
        for (let i = 0; i < n; i++) {
            const tmp = v[i]
            // 如果map中没有当前投票人，新建空数组
            if (ranks[tmp] === undefined) {
                ranks[tmp] = new Array(n).fill(0)
            }
            // 将所在位置的票数加1
            ranks[tmp][i]++
        }
    })

    const res = Object.keys(ranks).sort((a, b) => {
        const listA = ranks[a]
        const listB = ranks[b]
        for (let i = 0; i < n; i++) {
            // 如果相等，继续循环，不相等，直接返回
            if (listA[i] !== listB[i]) {
                return listB[i] - listA[i]
            }
        }
        // 最后没返回时,说明两数相等，按字母排序返回
        // a > b b在前，a在hou
        return a > b ? 1 : -1
    })
    return res.join('')
}
// @lc code=end
