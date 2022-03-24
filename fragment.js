/**
 * @file: 算法常用代码片段
 * @author: zhaojianpeng
 */

/**
 * 
  判断链表是否有环
 */
/**
 *
 * @param {ListNode} head
 * @return {boolean}
 * 这样会污染链表
 */
const hasCycle = function (head) {
  // 只要存在节点就遍历
  while (head) {
    // 如果已经打过标记，说明环存在
    if (head.mark) {
      return true;
    }
    // 第一次经过，打标记
    head.mark = true;
    // 继续遍历
    head = head.next;
  }
  return false;
};

// 利用数组
const hasCycle = function (head) {
  const res = [];
  while (head) {
    if (res.includes(head)) {
      return true;
    }
    res.push(head);
    head = head.next;
  }
  return false;
};

// 快慢指针, 如果快慢指针相遇，则证明有环
const hasCyle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  //  定义快慢指针, slow,fast
  let slow = head;
  let fast = head.next;
  while (slow) {
    if (slow === fast) {
      return true;
    }
    slow = (slow && slow.next) || null;
    fast = fast?.next?.next || null;
  }
  return false;
};
// JSON.stringify
// JSON.stringify会自动检测传入的对象是否有环，如果成功，则无环
const hasCycle = function (head) {
  try {
    JSON.stringify(head);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * 合并两个递增链表，保持增序
 * tips: 处理链表的本质，是处理立案表决结构之间的指针关系
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const mergeTwoList = function (l1, l2) {
  // 定义头结点，确保列表可以被访问到
  let head = new ListNode();

  // 当前的指针
  let cur = head;

  // 在两个链表间穿梭
  while (l1 && l2) {
    // 如果l1的节点值比较小
    if (l1.val <= l2.val) {
      // 串起l1的节点
      cur.next = l1;
      // l1的指针向前移一步
      l1 = l1.next;
    } else {
      // l2较小时，先串起l2的节点
      cur.next = l2;
      // l2向前一步
      l2 = l2.next;
    }
    // 连接节点后，当前节点也会往前移一步
    cur = cur.next;
  }
  //  处理链表不等长的情况
  cur.next = l1 != null ? l1 : l2;
  return cur.next;
};

/**
 * 删除列表中的重复节点
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 *
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 */
const deleteDuplicates = function (head) {
  // 极端情况：0或1个节点不会重复，直接返回
  if (!head || !head.next) {
    return head;
  }

  //  创建dummy
  let dummy = new ListNode();
  //  dummy指向头结点
  dummy.next = head;
  // cur从dummy开始遍历
  let cur = dummy;
  //  当cur后面至少有两个节点时
  while (cur.next && cur.next.next) {
    //  对cur后面两个节点进行比较
    if (cur.next.value === cur.next.next.val) {
      // 若值重复记下这个值
      let val = cur.next.val;
      // 反复排查后面的元素是否存在多次重复该值的节点
      while (cur.next && cur.next.val === val) {
        //  如果有，则删除
        cur.next = cur.next.next;
      }
    } else {
      // 若不重复，则正常遍历
      cur = cur.next;
    }
  }
  return dummy.next;
};

/**
 * 删除链表倒数第n个节点，并返回链表头结点
 // 给定一个链表: 1->2->3->4->5, 和 n = 2.
 // 当删除了倒数第二个结点后，链表变为 1->2->3->5.
 // 说明：给定的n保证是有效的
 *
 */

const removeNthFromEnd = function (head, n) {
  //  初始化dummy节点
  const dummy = new ListNode();
  // dummy指向头结点
  dummy.next = head;
  //  初始化快慢指针
  let slow = dummy;
  let fast = dummy.next;
  //  快指针先走n步
  while (n !== 0) {
    fast = fast.next;
    n--;
  }
  //  快慢指针一起走
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  //  快指针到末尾后，慢指针删除自己的后继节点
  slow.next = slow.next.next;
  return dummy.next;
};

/**
 * 反转从位置m到n的链表
// 说明：1 ≤ m ≤ n ≤ 链表长度。
// 示例：
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL
 */
const reverseBetween = function (head, m, n) {
  // 定义pre, cur, 用leftHead承接整个取件的前驱节点
  let pre;
  let cur;
  let leftHead;
  // 创建dummy节点，处理头结点为空的一些边界问题
  const dummy = new ListNode();
  //  dummy的后继节点是head;
  dummy.next = head;
  //  point是一个游标，用于遍历
  let point = dummy;
  // point往前走m-1步，走到整个区间的前驱结点处
  for (let i = 0; i < m - 1; i++) {
    point = point.next;
  }
  //  缓存前驱节点到leftHead
  leftHead = point;
  // start是翻转区间的第一个节点
  start = leftHead.next;
  //  pre指向start
  pre = start;
  //  cur指向start下一个节点
  cur = pre.next;
  //  开始重复翻转动作
  for (let i = m; i < n; i++) {
    // 记录next节点
    let next = cur.next;
    // 翻转指针
    cur.next = pre;
    // pre往前走一步
    pre = cur;
    // cur往前走一步
    cur = next;
  }

  //  leftHead的后继节点此时为翻转后的区间的第一个节点
  leftHead.next = pre;
  //  将区间翻转后的最后一个节点next指向cur
  start.next = cur;
  //  dummy.next指向链表头结点
  return dummy.next;
};

/**
 * 三数求和
 * 示例
    给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 */
const threeNum = function (nums) {
  // 存放结果
  const res = [];
  //   数组排序，双指针使用的前提
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  // 遍历到倒数第三个数就可以，因为
  for (let i = 0; i < len - 2; i++) {
    //   左右指针
    let j = i + 1;
    let k = len - 1;
    // 遇到重复数字跳过
    if (j > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        // 小于0，左指针前进
        j++;
        // 处理左指针重复
        while (nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 大于0，右指针后退
        k--;
        while (nums[k] === nums[k - 1]) {
          k--;
        }
      } else {
        res.push(nums[i], nums[j], nums[k]);
        j++;
        k--;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        while (nums[k] === nums[k + 1]) {
          k++;
        }
      }
    }
  }
  return res;
};

/**
 * @param {number[]} T
 * @param {number[]}
 */
const dailyTemperatures = function (T) {
  const len = T.length;
  // 初始化一个栈
  const stack = [];
  // 初始化结果数组，数组定长，占位为0
  const res = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    // 若栈不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop();
      // 计算 当前栈顶温度值与第一个高于它的温度值的索引差值
      res[top] = i - top;
    }
    // 注意栈里存的不是温度值，而是索引值，这是为了后边方便计算
    stack.push(i);
  }
  return res;
};

let t = setTimeout(() => {
  console.log(1111);
  let t1 = setTimeout(() => {
    console.log(2222);
    let t2 = setTimeout(() => {
      console.log(3333);
    }, 3000);
  }, 2000);
}, 1000);

// 用Promise实现
const fnasync = function (value, timeCount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, timeCount);
  });
};

fnasync(1111, 1000)
  .then(() => {
    return fnasync(2222, 2000);
  })
  .then(() => {
    return fnasync(3333, 3000);
  })
  .catch((err) => {
    console.err(err);
  });

let fn = async function () {
  await fnasync(1111, 1000);
  await fnasync(2222, 2000);
  await fnasync(3333, 3000);
};
