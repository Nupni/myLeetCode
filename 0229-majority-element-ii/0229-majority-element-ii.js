/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let result = []
    const memo = {}
    for(let i = 0; i < nums.length; i++) {
        let v = nums[i]

        if(!memo[v]) {
            memo[v] = 1
        } else {
            memo[v] += 1
        }
    }

     for(let key in memo) {
        if(memo[key] > nums.length / 3) {
            result.push(key) 
        }
    }

    return result
};