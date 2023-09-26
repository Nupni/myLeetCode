/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
   let n = arr.length
   let result = [];

  for(let i = 0; i < n; i++) {
    if(arr.length !== 0) {
      result.push(arr.splice(0, size));
    } 
  }
  
  return result;
};
