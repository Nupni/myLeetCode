/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let result = 0
    const str = (s, n) => {
        let str = ""
        for(let j = 0; j < n; j++) {
            str += s[j]
        }
        return str
    }

    for(let i = 0; i < words.length; i++) {
        if(words[i] === str(s, words[i].length)) {
            result++
        }
    }

    return result
};