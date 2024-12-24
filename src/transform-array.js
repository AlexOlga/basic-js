const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *     --discard-next excludes the next element of the array from the transformed array.
    --discard-prev excludes the previous element of the array from the transformed array.
    --double-next duplicates the next element of the array in the transformed array.
    --double-prev duplicates the previous element of the array in the transformed array.
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let i = 0;
  const res = [];
  while (i < arr.length) {
    switch (arr[i]) {
      case "--discard-next":
        i += 2;
        break;
      case "--discard-prev":
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          res.pop(); // Удаляем предыдущий элемент, если он не был удалён ранее
        }
           
        i += 1;
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]); // Дублируем следующий элемент
        }       
        i += 1;
        break;
      case "--double-prev":
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          res.push(arr[i - 1]); // Дублируем предыдущий элемент, если он не был удалён
        }
        
        i += 1;
        break;
      default:
        res.push(arr[i]);
        i += 1;
        break;
    }
  }
  return res;
}

module.exports = {
  transform,
};
