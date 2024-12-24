const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return '';
  let count = 1;
  let newStr = "";
  let char = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    } else {
      const temp = count === 1 ? char : `${count}${char}`;
      newStr += temp;
      count = 1;
      char = str[i];
    }
  }
  const temp = count === 1 ? char : `${count}${char}`;
  newStr += temp;
  return newStr;
}

module.exports = {
  encodeLine,
};
