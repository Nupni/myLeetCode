/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if(n <= 3) {
    return n - 1
  } else {
    let res = 1;
    while (n > 4) {
      n -= 3;
      res *= 3; 
    }
    return n * res;
  }
};