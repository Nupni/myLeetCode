/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const wordArr = s.split(" ")
    
    const resultText = (text) => {
        let result = []
        for(let i = 0; i < text.length; i++) {
            result.push([...text[i]].reverse().join(""))
        }
        return result.join(" ")
    }

    return resultText(wordArr)
};