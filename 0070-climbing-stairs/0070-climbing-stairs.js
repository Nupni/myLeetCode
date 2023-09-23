/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {}
    const countWays = (n) => {
        if(n <= 2) memo[n] = n

        if(n in memo) {
             memo[n]
        } else {       
            memo[n] = countWays(n - 1) + countWays(n - 2)
        }
        return memo[n]
    }
    return countWays(n)
}