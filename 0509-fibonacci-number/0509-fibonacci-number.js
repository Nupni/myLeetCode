/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
   const memo = {}
    const F = (n) => {
        if(n <= 1) memo[n] = n

        if(n in memo) {
            memo[n]
        } else {       
            memo[n] = F(n - 1) + F(n - 2)
        }
        return memo[n]
    }
    return F(n)
};