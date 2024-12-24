const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const errorMessage = "Unable to determine the time of year!";
  const invalidDateMessage = " Invalid date!";
  if (arguments.length === 0) return errorMessage;
  
  if (typeof date !== "object") {
    throw new Error("Invalid date!");
  }
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  //не должно быть собственных свойств
  if (
    Object.getOwnPropertyNames(date).length > 0 ||
    Object.getOwnPropertySymbols(date).length > 0
  ) {
    throw new Error("Invalid date!");
  }

  // Проверка на валидность даты
  if (isNaN(date.getTime())) {
    throw new Error(invalidDateMessage);
  }

  const month = date.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 11:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
    default:
      return invalidDateMassage;
  }
}

module.exports = {
  getSeason,
};
