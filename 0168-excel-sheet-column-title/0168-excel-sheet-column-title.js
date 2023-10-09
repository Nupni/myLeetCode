/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const A = 65
    let num = columnNumber
    let res = ""
    let result = ""

    const char = (n) => {
        let str = String.fromCharCode((n % 26) + A)
        return str
    }

    while(num > 0) {
        num--
        res += char(num)
        num = Math.floor(num / 26)
    }

    for(let i = res.length - 1; i >= 0; i--) {
        result += res[i]
    } 
    
    return result
};