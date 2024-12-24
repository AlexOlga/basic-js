const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *options is an object of options, that contains properties:

    repeatTimes sets the number of repetitions of the str;
    separator is a string separating repetitions of the str;
    addition is an additional string that will be added to each repetition of the str;
    additionRepeatTimes sets the number of repetitions of the addition;
    additionSeparator is a string separating repetitions of the addition.


 */
function repeater(str, options) {
 
  let newStr = typeof str !== "string" ? String(str) : str;

  if (options.hasOwnProperty("addition") && typeof addition !== "string") {
    options.addition = String(options.addition);
  }
  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }
  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }
  if (options.hasOwnProperty("addition") && options.hasOwnProperty("additionRepeatTimes")) {
    const tempArr = Array.from(
      { length: options.additionRepeatTimes },
      () => options.addition
    );
    newStr += tempArr.join(options.additionSeparator);
  };
  if (options.hasOwnProperty("addition") && ! options.hasOwnProperty("additionRepeatTimes")) {
    newStr += options.addition;
  }

  if (options.hasOwnProperty("repeatTimes")) {
    const tempArr = Array.from({ length: options.repeatTimes }, () => newStr);
    newStr = tempArr.join(options.separator);
  }

  return newStr;
}

module.exports = {
  repeater,
};
