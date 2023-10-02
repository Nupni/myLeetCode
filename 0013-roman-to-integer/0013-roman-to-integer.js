/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const match = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  const spacialMatch = {
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
  }
  let value = 0
  
  for(let i = 0; i < s.length; i++) {
    let spacial = s[i] + s[i + 1]
    let check = spacialMatch[spacial]
    if(!check) {
      value += match[s[i]]
    } else {
      value += check
      i++
    }
  }

  return value
};