/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let i = 0
    while(2 ** i < n) {
        i++
    }
    return 2 ** i == n
};