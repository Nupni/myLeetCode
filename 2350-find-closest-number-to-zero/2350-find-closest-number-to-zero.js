/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let arr = {}
    for(let i in nums) {
        let v = nums[i]
        if(v < 0) {
            arr[v] = v * -1
        } else {
            arr[v] = v
        }
    }

    const result = Object.entries(arr)

    for(let i = 0; i < result.length - 1; i++) {
        for(let j = 0; j < result.length - i - 1; j++) {
            if(result[j][1] > result[j + 1][1]) {
                let temp = result[j]
                result[j] = result[j + 1]
                result[j + 1] = temp
            }
        }
    }

    return result[0][0]
};