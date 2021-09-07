/* 
215. 数组中的第K个最大元素
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
示例 1:
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heapSize = nums.length
    buildMaxHeap(nums, heapSize)
    for (let i = nums.length - 1; i >= nums.length - k + 1;i--) {
        swap(nums, 0, i)
        --heapSize
        maxHeapify(nums, 0, heapSize)
    }
    return nums[0]

};

/* 构建大顶堆 */
function buildMaxHeap(nums, heapSize) {
    for (let i = Math.floor(heapSize/2) - 1; i >= 0; i--) {
        maxHeapify(nums, i,heapSize)
    }
}

function maxHeapify(nums, i, heapSize) {
    let l = i * 2 + 1
    let r = i * 2 + 2
    let largest = i
    if (l < heapSize && nums[l] > nums[largest]) {
        largest = l
    }
    if (r < heapSize && nums[r] > nums[largest]) {
        largest = r
    }
    if (largest !== i) {
        swap(nums, i, largest)
        maxHeapify(nums, largest, heapSize)
    }
}

function swap(a, i, j) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
}