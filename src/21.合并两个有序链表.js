/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    const prehead = new ListNode(-1)
    let prev = prehead
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            prev.next = list1
            list1 = list1.next
        } else {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    // list1 或list2有一个为空时，将剩余的加载后面
    prev.next = list1 === null ? list2 : list1

    return prehead.next
    // 时间复杂度：O(n + m)
    // 空间复杂度：O(1)
    
}
// @lc code=end
