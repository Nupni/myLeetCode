/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let result = 0
  for(let k in nums) {
    if(nums[k] !== val) {
      nums[result++] = nums[k];
    }
  }

  return result
};