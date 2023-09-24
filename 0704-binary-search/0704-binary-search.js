/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // return nums.indexOf(target)
    const start = 0
    const end = nums.length - 1
    const findNum = (target, start, end) => {
        if(start > end) return -1

        const mid = Math.floor((start + end) / 2)

        if(nums[mid] === target) return mid

        if(nums[mid] > target) return findNum(target, start, mid - 1)

        if(nums[mid] < target) return findNum(target, mid + 1, end)
    }

    return findNum(target, start, end)
};