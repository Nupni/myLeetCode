/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const memo = {}
    for(let v of nums) {
        if(!memo[v]) {
            memo[v] = 1
        } else {
            memo[v] += 1
        }
    }

    for(let [k, v] of Object.entries(memo)) {
        if(v % 2 !== 0) return false
    }

    return true
};