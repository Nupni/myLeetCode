/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let index;
    let result = []
    for(const num of nums) {
        result[num] = num;
    }

    for(let i = 0; i < result.length; i++) {
        if(result[i] === undefined) {
            result[i] = -1
            break
        }
    }

    index = result.indexOf(-1)
    if(index === -1) {
        return nums.length
    }
    return index
};