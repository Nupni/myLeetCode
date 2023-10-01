/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let check = {};
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i + 1]) {
            check[0] = 0
        } else if(nums[i] < nums[i + 1]) {
            check[1] = 1
        }
    }
    const result = Object.keys(check).length === 2 ? false : true
    return result
};