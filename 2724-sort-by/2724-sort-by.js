/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  // let memo;
  // for(let i = 0; i < arr.length - 1; i++) {
  //   for(let j = 0; j < arr.length - i - 1; j++) {
  //     if (fn(arr[j]) > fn(arr[j + 1])) {
  //         memo = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = memo;
  //     }
  //   }
  // }
  // return arr
  function merge(left, right) {
      let arr = []
      while (left.length && right.length) {
          
          if (fn(left[0]) < fn(right[0])) {
              arr.push(left.shift())  
          } else {
              arr.push(right.shift()) 
          }
      }
      
      return [ ...arr, ...left, ...right ]
  }

  function mergeSort(array) {
    const half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

  return mergeSort(arr)
};