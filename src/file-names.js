const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names) {
  const nameCounts = {}; 
  const result = []; 

  for (let i = 0; i< names.length; i++) {
    const name = names[i];
    if (!nameCounts[name]) {
      // имя ещё не использовалось
      nameCounts[name] = 1;
      result.push(name);
    } else {
      //имя уже использовалось
      let newName = `${name}(${nameCounts[name]})`;
      nameCounts[name] += 1; 

      // Добавляем новое имя в словарь и массив
      nameCounts[newName] = 1;
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
