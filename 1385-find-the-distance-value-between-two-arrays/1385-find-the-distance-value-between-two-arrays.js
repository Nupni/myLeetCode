/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  let result = 0
  for(let i = 0; i < arr1.length; i++) {
    let start = true
    for(let j = 0; j < arr2.length; j++) {
      if(Math.abs(arr1[i] - arr2[j]) <= d) {
        start = false
        break
      }
    }
    if(start) {
      result++
    }
  }
  return result
};