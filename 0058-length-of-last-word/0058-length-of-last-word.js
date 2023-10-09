/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result
    const arr = s.split(" ")
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] !== "") {
            result = arr[i]
            break
        }
    }
    return result.length
};