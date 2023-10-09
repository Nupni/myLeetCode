/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const result = []
    for(let i in nums) {
        if(target === nums[i]) {
            result[result.length] = i
        }
    }

    let start = result[0]
    let end = result[result.length - 1]
    if(result.length === 0) {
        return [-1, -1]
    } else if(result.length === 1) {
        return [start, start]
    }
    return [start, end]
};