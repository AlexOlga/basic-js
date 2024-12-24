const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  let maxNumber = 0;
  // Перебираем все цифры и удаляем каждую по очереди
  for (let i = 0; i < digits.length; i++) {
    const tempArray = digits.slice(); 
    tempArray.splice(i, 1); // Удаляем одну цифру по индексу i
    const number = parseInt(tempArray.join(''), 10); 
    maxNumber = Math.max(maxNumber, number); 
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
