/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squaring = (arr) => {
        let array = []
        for(let v of arr) {
            array.push(v * v)
        }
        return array
    }

    let arr = squaring(nums)

    const n = arr.length
    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            let temp
            if(arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
};