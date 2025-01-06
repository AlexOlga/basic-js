const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  let sum = 0;
  const  cols = matrix[0].length;
  const rows = matrix.length;
  for (let i=0; i<cols; i++ ){
    let j =0;
    let flag = true;
    while (j<rows && flag){
      if (matrix[j][i]===0){flag=false } else {
        sum += matrix[j][i]
        j++
      }
    }

  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
