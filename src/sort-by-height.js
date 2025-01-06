const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 * Sort by height
 */
function sortByHeight(arr) {
  const heights = arr.filter((value) => value !== -1).sort((a, b) => a - b);
  for (let i=arr.length-1; i>=0; i--) {
   arr[i] = (arr[i]=== -1) ? arr[i] : heights.pop();
  }
 return arr;
}

module.exports = {
  sortByHeight
};
