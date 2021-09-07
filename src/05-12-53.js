var maxSubArray = function(nums) {
    let pre = 0, res = nums[0]
    nums.forEach(num => {
        pre = Math.max(pre + num, num)
        res = Math.max(res, pre)
    })
    return res
};