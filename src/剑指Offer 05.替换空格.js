/**
 * @param {string} s
 * @return {string}
 */

//  很多数组填充类的问题，都可以先预先给数组扩容带填充后的大小，然后在从后向前进行操作。

//  这么做有两个好处：

//  不用申请新数组。
//  从后向前填充元素，避免了从前先后填充元素要来的 每次添加元素都要将添加元素之后的所有元素向后移动。

const replaceSpace = function (s) {
    // 将字符串转为数组
    const arr = Array.from(s)

    // 计算出空格的数量
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            count++
        }
    }

    // 从右侧开始填充元素，要扩充数组长度为 arr.length +2 * count
    let left = arr.length - 1
    let right = arr.length - 1 + 2 * count
    while (left >= 0) {
        // 等于空格时，右指针左移，依次加入'20%'，并且左指针左移
        if (arr[left] === ' ') {
            arr[right--] = '0'
            arr[right--] = '2'
            arr[right--] = '%'
            left--
        } else {
            // 不等于时，左右指针依次左移，将左指针赋给右指针
            arr[right--] = arr[left--]
        }
    }

    // 最后将数组转成字符串
    return arr.join('')
}
