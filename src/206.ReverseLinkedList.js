/**
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

 */
var reverseList = function (head) {
  const dummy = new ListNode(0);
  //   这里要先把dummy.next指向head
  dummy.next = head;
  //   判断条件为且的关系
  while (head !== null && head.next !== null) {
    let headNext = head.next;
    let dummyNext = dummy.next;
    // 这里指针的替换，当前节点的next，给了dummy的next
    // 当前节点指向当前节点的next的next
    // dummy的next的next要指向初始的head
    dummy.next = headNext;
    head.next = headNext.next;
    headNext.next = dummyNext;
  }
  return dummy.next;
};
