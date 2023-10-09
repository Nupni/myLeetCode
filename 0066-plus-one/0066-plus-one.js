/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let rusult = []
    let num = ""
    const n = digits.length
    for(let i = 0; i < n; i++) {
    //    num += digits[i] * (10 ** (n - i - 1))
       num += digits[i]
    }

    num = BigInt(num) + 1n + ""
    console.log(num)

    for(let i in num) {
        rusult[i] = num[i]
    }

   return rusult
};