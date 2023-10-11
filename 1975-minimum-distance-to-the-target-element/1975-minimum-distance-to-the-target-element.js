/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
   let result
   let left, right
   let n = nums.length

   for(let i = start; i < n; i++) {
      if(nums[i] === target) {
         right = i - start
         break
      }
   }

   for(let i = start; i >= 0; i--) {
      if(nums[i] === target) {
         left = start - i 
         break
      }
   }

   if(left == undefined || right < left) {
      result = right
   } else {
      result = left
   }

   return result
};