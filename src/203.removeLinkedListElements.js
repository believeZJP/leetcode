/**
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 

示例 1：


输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
示例 2：

输入：head = [], val = 1
输出：[]
示例 3：

输入：head = [7,7,7,7], val = 7
输出：[]
 

提示：

列表中的节点在范围 [0, 104] 内
1 <= Node.val <= 50
0 <= k <= 50

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return null;
  }
  //   创建一个虚拟节点，因为后面要删除节点，如果删掉头结点的会比较麻烦。
  // 另一方面，删除当前节点，需要将上一个节点指向当前节点的下一个节点，需要有个变量保存上一个节点
  const dummyNode = new ListNode(0);
  dummyNode.next = head;
  let prev = dummyNode;
  while (head !== null) {
    //   删除当前节点，指向下一个节点
    if (head.val === val) {
      prev.next = head.next;
      head = head.next;
    } else {
      prev = head;
      head = head.next;
    }
  }
  return dummyNode.next;
};
