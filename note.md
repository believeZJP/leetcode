<!--
 * @file: file
 * @author: zhaojianpeng<zhaojianpeng@baidu.com>
-->

# Leetcode升级之路（数据结构更新完毕）

======================

本文链接：[https://blog.csdn.net/unspoken0714/article/details/110286517](https://blog.csdn.net/unspoken0714/article/details/110286517)

版权

[饲养员的教学笔记](https://www.bilibili.com/video/BV1sy4y1q79M)

## 时间复杂度

=====

### 常见的时间复杂度

--------

* O(1):  
    执行常数次，和输入无关

```js
    def O1(num):
     i = num
     j = num*2
     return i+j
```

* O(N):

```js
    def ON(num):
     total = 0
     for i in range(num):
      total+=i
     return total
```

* O(logN):

```js
    def OlogN(num);
      i = 1
      while(i < num):
       i = i*2
     return i
```

* O(M+N)

```js

    def OMN(num):
     total = 0
     for i in range(num):
      total += 1
     for j in range(num):
      total += j
     return total
```

* O(NlogN)

```js

    def ONlogN(num1, num2):
     total = 0
     j = 0
     for i in range(num1):
      while(j < num2):
       total += i + j
       j = j*2
     return total
```

* O(N^2)

```js

    def ON2(num):
     total = 0
     for i in range(num):
      for j in range(num):
       total += i + j
     return total
```

![](https://img-blog.csdnimg.cn/20201128171500885.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Vuc3Bva2VuMDcxNA==,size_16,color_FFFFFF,t_70)  

O(1) < O(logN) (二分查找) < O(N) < O(NlogN) < O(N^2) < O(2^n) < O(n!)

### 常见的空间复杂度

--------

算法的存储空间与输入值之间的关系  
O(1) < O(N) < O(N^2)  
常量看其与输入值得关系  
递归要考虑递归栈  
O(1)

```js

    def ON(num):
     sum = 0;
     for i in range(num):
      sum = sum+i
     return sum
```

递归  
O（n）
因为递归每一层的信息都会保留在递归栈里

```js

    def ON(num):
     if(num<=0):
      return 0
     return ON(num-1) + ON(num-2)
```

Note: 时间空间二选一

## 数据结构

数组

* 定义：在**连续的内存空间**中，储存一组**相同类型**的元素
* 数组的访问: 通过索引访问元素。a[0]
* 数组的内存空间是连续的，增删需要移动后面的元素
* 二维数组的内存地址是连续的吗？

> 二维数组实际是一个线性数组存放着其他数组的首地址  
> ![](https://img-blog.csdnimg.cn/20201205174846165.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Vuc3Bva2VuMDcxNA==,size_16,color_FFFFFF,t_70)

* 数组的搜索：找到这个元素对应的索引

### 复杂度

* 访问Access:Ｏ（１）  
    通过计算可以得到地址位置，从而进行访问
* 搜索search:O(N)  
    需要对数组进行遍历
* 插入insert: O(N)  
    需要将后面的元素往后移动  
    如果内存不够，需要开辟一块新空间，将数组移进去
* 删除delete: O(N)  
    需要将后面元素往前移

### 特点

* 适合读
* 不适合频繁做增删操作。
* 场景：读多写少

### 常用操作

1. 创建数组
2. 添加元素
3. 访问元素
4. 修改元素
5. 删除元素
6. 遍历数组
7. 查找元素
8. 数组长度
9. 数组排序(内置排序方法)

```python

# 创建数组

    a = [];

# 添加元素

# 末尾添加

    a.append(1)
    a.append(2)
    a.append(3)

# [1,2,3]

# insert(x,y)指定位置x添加y

    a.insert(2,99)

# [1,2,99,3]

* 访问元素

    temp = a[2]

# temp = 99

* 修改元素

    a[2] = 88

* 删除元素

# 删除指定值 O(N)

    a.remove(88)

# 1 2 3

# 删除指定索引的元素 O(N)

    a.pop(1)

# 1 2

# 删除最后的元素 O(1)

    a.pop()

# 1

# 遍历元素

    for i in a:
     print(i)

#

    for i in range(0,len(a)):
     print("index:",i,"value:",a[i])

#

    for i, val in emumerate(a):
     print("index:",i,"value:",val)

# 查找元素

    index = a.index(2)

# 数组的长度

    len(a)

# 数组的排序

# 从小到大

    a.sort()

# 从大到小

    a.sort(reverse =True)
```

### 练习题

[Leetcode 485](https://leetcode-cn.com/problems/max-consecutive-ones/)

[Leetcode 283](https://leetcode-cn.com/problems/move-zeroes/)

[Leetcode 27](https://leetcode-cn.com/problems/remove-element/)

--------

## 链表

* 非连续空间，包含当前数据和下一节点的地址

### 复杂度

* 访问 O（N）
* 搜索 O（N）
* 插入 O（1）
* 删除 O（1）

### 场景

读少写多

### 常用操作

1. 创建链表

2. 添加元素
3. 访问元素
4. 查找元素
5. 删除元素
6. 链表的长度

* 创建链表

```python
    linkedldist = deque()
```

* 添加元素

```python

# 尾部添加

    linkedlist.append(1)
    linkedlist.append(2)
    linkedlist.append(3)

# 指定位置添加 O(n)

    linkedlist.insert(2,99)
```

* 访问元素

```python

# O(N)

    element = linkedlist[2]

# 99
```

* 查找元素  
    O(N)

```python

    index = linkedlist.index(99)

# 2
```

* 删除元素  
    O(N)

```python

# 删除元素

    linkedlist.remove(1)

# 删除指定索引的元素

    del linkedlist[2]
```

* 更新元素  
    O(N)

```python
    linkedlist[2] = 88
```

* 链表的长度  
    O(1)

```python
    length = len(linkedlist)
```

### 练习题

[203](https://leetcode-cn.com/problems/remove-linked-list-elements/)
[206](https://leetcode-cn.com/problems/reverse-linked-list/)

--------

## 队列

* 先进先出
* 基于链表创建的

> 单端队列： 一个口进一个口出
> 双端队列： 两个口都可以进，两个口都可以出

### 复杂度

* 访问: O(N)
* 搜索：O(N)
* 插入: O(1)
* 删除： O(1)

### 常用操作

1. 创建队列
2. 添加元素
3. 获取即将出队的元素
4. 删除即将出队的元素
5. 判断队列是否为空
6. 队列长度
7. 遍历队列

* 创建队列

```js
function Queue() {
  let items = []
  this.enqueue = function(e) {
    items.push(e)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.front = function() {
    return items[0]
  }
  this.clear = function() { 
    items = [] 
  }
  this.size = function() {
    return items.length
  }
}

function Deque() {
  let items = []
  this.addFirst = function(e) {
    items.unshift(e)
  }
  this.removeFirst = function() {
    return items.shift()
  }
  this.addLast = function(e) {
    items.push(e)
  }
  this.removeLast = function() {
    return items.pop()
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.front = function() {
    return items[0]
  }
  this.clear = function() { 
    items = [] 
  }
  this.size = function() {
    return items.length
  }
}
```

```python
# 创建队列
# 该方法为双端队列
queue = deque()
# 向末尾添加
queue.append(1)
# 向队列头添加
queue.appendleft(1)
# 获取即将出队的元素 O(1)
    temp1 = queue[0]
# 获取队尾元素 O(1)
    temp2 = queue[-1]
    temp2 = queue[len(queue)-1]
# 删除即将出队的元素 O(1)
# 会返回元素
temp2 = queue.popleft()
# 删除最右元素
queue.pop()

# deque每次添加删除元素时会自动计数 O(1)
len(queue) == 0
# deque每次添加删除元素时会自动计数 O(1)
len(queue)
# 变删除边遍历
    while len(queue) !=0:
     temp = queue.popleft()
     print(temp)
```

### 练习题

[Leetcode 239](https://leetcode-cn.com/problems/sliding-window-maximum/)  
经典单调队列题目

> 思路：  
> 将滑动窗可以看成一个双端队列。双端队列的最大值放在头部，当头部与滑动窗口出窗的元素相同时，则弹出队头。滑动窗要新进入的元素与队列的尾部元素进行比较，如果比尾部元素大，这弹出尾部元素，因为尾部元素肯定不可能为最大元素。直到尾部元素比要进队元素大或者队列为空时，将进队元素压入队尾。

```python

    class Solution:
        def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
            queue = deque()
            res = []
            for i in range(k):
                while (len(queue)!=0 and nums[i] > queue[len(queue)-1]):
                    queue.pop()
    
                queue.append(nums[i])
            res.append(queue[0])
            
    
            for i in range(k,len(nums)):
                if(queue[0]==nums[i-k]):
                    queue.popleft()
                
                while (len(queue)!=0 and nums[i] > queue[len(queue)-1]):
                    queue.pop()
                queue.append(nums[i])
                res.append(queue[0])
    
            return res
```

--------

## Stack

* 先进后出
* 基于链表创建的

> 单端队列： 一个口进一个口出
> 双端队列： 两个口都可以进，两个口都可以出

### 复杂度

* 访问: O(N)
* 搜索：O(N)
* 插入: O(1)
* 删除： O(1)

查找：从栈头开始查找，时间复杂度为 O(n)

插入或删除：进栈与出栈的时间复杂度为 O(1)

### 常用操作

1. 创建栈
2. 添加元素
3. 查看栈顶元素-即将出栈的元素
4. 删除栈顶元素-即将出栈的元素
5. 栈的长度
6. 栈是否为空
7. 遍历栈(边删除栈顶元素，边遍历)

```js
function Stack() {
    let items = []
    // 入栈
    this.push = function(e) {
        items.push(e)
    }
    // 出栈
    this.pop = function() {
        return items.pop()
    }
    // 是否为空
    this.isEmpty = function() {
        return items.length === 0
    }
    // 栈大小
    this.size = function() {
        return items.length
    }
    // 清空栈
    this.clear = function() {
        items = []
    }
 
}
```

### 练习题

[Leetcode 20](https://leetcode-cn.com/problems/valid-parentheses/)
[Leetcode 496](https://leetcode-cn.com/problems/next-greater-element-i/)

--------

## Hash

* Key - Hash Function - Address
* Key - Value

哈希碰撞：两个不同的key通过同一个hash函数得到相同的内存地址  
![](https://img-blog.csdnimg.cn/20201219042421448.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Vuc3Bva2VuMDcxNA==,size_16,color_FFFFFF,t_70)  
4通过哈希函数解析出的地址也是1，冲突了。  
解决方法：

1. 链表法， 在后面通过链表加入4.bish

### 复杂度

* 访问: 没有这个方法
* 搜索：O(1)， 如果有hash碰撞的情况下，就不是O(1)了，为O(K), K为碰撞元素的个数
* 插入: O(1)
* 删除： O(1)

### 常用操作

* 创建哈希表

# 使用数组创建hash

    hashTable = ['']x4

# 使用字典创建hash

    mapping = {}

* 添加元素

# 数组添加

    hashTable[1] = 'hanmeimei'
    hashTable[2] = 'lihua'
    hashTable[3] = '233'
    mapping[1] = 'hanmeimei'
    mapping[2] = 'lihua'
    mapping[3] = '233'

* 修改元素

    hashTable[1] = 'unspoken'
    mapping[1] = 'erd'

* 删除

    hashTable[3] = ''
    mapping.pop(1)   # 删除key=1的值

# 或者使用del

    del mapping[1]

* 获取Key对应的值

    hashTable[3]
    mapping[2]

* Key是否存在

    #数组类型的只能遍历

# 返回true或false

    3 in mapping

* hash长度

    len(mapping)

# empty?

    len(mapping)==0

### 练习题

[Leetcode 217](https://leetcode-cn.com/problems/contains-duplicate/)

> 思路：  
> 将数组中的数看做key，出现相同的key，则在key对应的value上+1  
> 然后判断，如果有value>1的情况，则说明有重复元素，返回true

    class Solution:
        def containsDuplicate(self, nums: List[int]) -> bool:
            mapping = {}
            for i in nums:
                if i not in mapping:
                    mapping[i] = 1
                else:
                    mapping[i] = mapping[i]+1
                if mapping[i] > 1:
                    return True
            return False

[Leetcode 389](https://leetcode-cn.com/problems/find-the-difference/)

> 思路：  
> 将字符串中的元素看做key，出现相同的key，则在key对应的value上+1  
> 然后对t字符串的元素进行遍历，如果该元素没有出现在mapping中，或者该元素对应的value为0，则返回该元素

    class Solution:
        def findTheDifference(self, s: str, t: str) -> str:
            mapping = {}
            for i in s:
                if i not in mapping:
                    mapping[i] = 1
                else:
                    mapping[i]+=1
            
            for i in t:
                if i not in mapping or mapping[i] is 0:
                    return i
                else:
                    mapping[i]-=1
            
            return "a"

[Leetcode 496](https://leetcode-cn.com/problems/next-greater-element-i)

> 思路：  
> 单调栈的应用：  
> 场景：寻找下一更大元素（单调递减栈），或更小元素（单调递增栈）；  
> 使栈里的元素呈现单调递增或者递减  
> 以此题为例，如果想要让栈里元素递减，则当要入栈元素>栈顶元素，则弹出栈顶元素，并用哈希表保存栈顶和入栈元素。直至出现比入栈元素大的栈顶元素，或者栈空。  
> 遍历完元素后，栈中剩余元素，规定其对应的值为-1，存入hash表中

    class Solution:
        def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
            stack = []
            mapping = {}
            for i in nums2:
                if len(stack) == 0:
                    stack.append(i)
                else:
                    while len(stack) > 0 and stack[-1] < i:
                        t1 = stack[-1]
                        mapping[t1] = i
                        stack.pop()
                    stack.append(i)
            
            while len(stack) != 0:
                mapping[stack[-1]] = -1
                stack.pop()
            
            res = []
            for i in nums1:
                res.append(mapping[i])
            
            return res        

Set
---

* 无序
* 不重合

> 主要作用：检查某一个元素是否存在  
> 有没有重复元素

### 复杂度

* 访问: 没有这个方法
* 搜索：O(1)， 如果有hash碰撞的情况下，就不是O(1)了，为O(K), K为碰撞元素的个数
* 插入: O(1)； 有hash冲突O（k）
* 删除： O(1)； 有hash冲突O（k）

### 常用操作

* 创建Set

# 使用数组创建hash

    s=set()

* 添加元素

    s.add(18)
    s.add(10)
    s.add(1)

* 删除

    s.remove(2)

* 元素是否存在

# 返回true或false

    3 in s

* hash长度

    len(s)

# empty?

    len(s)==0

树
-

* 节点：除了根节点和叶子节点外的节点
* 根节点：第一个开始的节点
* 叶子节点：最底层的节点，没有孩子、  
    ![](https://img-blog.csdnimg.cn/20201227052919962.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Vuc3Bva2VuMDcxNA==,size_16,color_FFFFFF,t_70)  
    深度：从上往下计算  
    高度：从下往上计算  
    层：从上往下计算。1开始  
    ![](https://img-blog.csdnimg.cn/20201227053438978.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Vuc3Bva2VuMDcxNA==,size_16,color_FFFFFF,t_70)

遍历：  
[二叉树d的遍历](https://blog.csdn.net/unspoken0714/article/details/107737864)

* 前序遍历:先访问根节点，然后访问左节点，最后右节点
* 中序遍历:先访问左节点，然后访问根节点，最后右节点
* 后续遍历:先访问左节点，然后访问右节点，最后根节点

堆（heap）
-------

* 完全二叉树
* 每个节点>=(最大堆） or <=（最小堆）孩子节点

### 复杂度

访问（acess）：无  
搜索：O(1) (堆顶)  
添加：O（logN）  
删除：O(logN） 一般是堆顶

### 复常用操作

* 创建堆

# 使用数组创建heap

    minheap = []
    heapq.heapify(minheap)

* 添加元素

    heapq.heappush(minheap,10)
    heapq.heappush(minheap,8)
    heapq.heappush(minheap,6)
    heapq.heappush(minheap,2)
    heapq.heappush(minheap,11)

* 查看堆顶元素

# peek

    print(minheap[0])

* 删除

    heapq.heappop(minheap)

* 长度

    len(minheap)

# empty?

    len(s)==0

* Iteration

    while len(minheap)!=0:
     print(heap.heappop(minheap))

**如何获取最大堆**  
将元素取反，然后对其进行最小堆处理，即是最大堆  
如1,3,6,8  
取反-1,-3,-6,-8  
最小堆的堆顶-8，-（-8） = 8即为最大堆的堆顶

图
-

* 无向图

* 有向图

* 权重图

* 入度：多少边指向该顶点

* 出度：多少边从这个点指向别的顶点

数据结构知识点回顾
---------

各种数据结构：

* 访问
* 搜索
* 插入
* 删除  
    各种数据结构相对应的时间复杂度
