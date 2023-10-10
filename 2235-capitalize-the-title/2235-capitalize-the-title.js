/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let result = ""
    const arrTitle = title.split(" ")
    const n = arrTitle.length

    for(let i = 0; i < n; i++) {
        let str = arrTitle[i].toLowerCase()

        if(str.length > 2) {
            str = str[0].toUpperCase() + str.slice(1)
        }
        
        if(i === n - 1) {
            result += str
        } else {
            result += str + " "
        }
    }

    return result
};