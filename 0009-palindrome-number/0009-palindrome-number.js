/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const setup = [...`${x}`];
  let result;

  const check = (num) => {
    let checkResult = true;
    for (let i = 0; i < Math.floor(num.length / 2); i++) {
      if (!checkResult) return checkResult;
      checkResult = num[i] === num[num.length - (i + 1)];
    }
    return checkResult;
  };

  if (x < 0) {
    result = false;
  } else {
    result = check(setup);
  }
  return result;
};