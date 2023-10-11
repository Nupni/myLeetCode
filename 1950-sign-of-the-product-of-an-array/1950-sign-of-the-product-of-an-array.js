/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let sum = 1

   for(let v of nums) {
      sum *= v
   }

   const signFunc = (v) => {
      if(v === 0 || isNaN(v)) return 0 
      if(v < 0) return -1
      if(v > 1) return 1
   }

   console.log(sum)
   return signFunc(sum)
};